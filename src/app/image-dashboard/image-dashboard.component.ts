import {Component, OnDestroy, OnInit} from '@angular/core';
import {ImageSearchService} from '../common/services/image-search.service';
import {Observable} from 'rxjs/Observable';
import {NasaImagesSearchResult} from '../common/classes/nasa-images';
import {Subject} from 'rxjs/Subject';
import {
  catchError, debounceTime, switchMap, combineLatest, startWith, concatAll, concat, bufferWhen,
  distinctUntilChanged, tap
} from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/reduce';
import {NasaImageItem} from '../common/classes/nasa-image-item';
import {Subscription} from 'rxjs/Subscription';

const INIT_VALUE = 'Planet';

@Component({
  selector: 'nasa-image-dashboard',
  templateUrl: './image-dashboard.component.html',
  styleUrls: ['./image-dashboard.component.css']
})
export class ImageDashboardComponent implements OnInit, OnDestroy {

  public imageSearchService: ImageSearchService;

  public images: NasaImageItem[];
  private imagesSubscription: Subscription;

  public query$$ = new Subject<string>();
  public yearFrom$$ = new Subject<string>();
  public yearTo$$ = new Subject<string>();
  public nextPage$$ = new Subject<string>();
  private nextPageSubscription: Subscription;

  public nextPage: string;
  public allItemsCount = 0;
  public initValue: string;

  constructor(_imageSearchService: ImageSearchService) {
    this.imageSearchService = _imageSearchService;
  }

  mapNasaImagesToNasaImageItems(result: NasaImagesSearchResult) {
    if (result.collection.links) {
      const nextLink = result.collection.links.find((element, index, array) => element.rel === 'next');
      if (nextLink) {
        this.nextPage = nextLink.href;
      }
    } else {
      this.nextPage = null;
    }
    const itemsWithImages = result.collection.items.filter(
      (item: NasaImageItem) => {
        const hasImageLink = item.links && item.links.find((element) => element.render === 'image') !== undefined;
        if (!hasImageLink) {
          this.allItemsCount--;
        }
        return hasImageLink;
      }
    );
    return Observable.of(itemsWithImages);
  }

  ngOnInit() {
    this.initValue = INIT_VALUE;
    this.imagesSubscription = this.query$$.pipe(
      startWith(INIT_VALUE),
      combineLatest(
        this.yearFrom$$.pipe(startWith(null)),
        this.yearTo$$.pipe(startWith(null)),
        (query, yearFrom, yearTo) => ({query, yearFrom, yearTo})
      ),
      debounceTime(500),
      switchMap(({query, yearFrom, yearTo}) => this.imageSearchService.getImages$(query, yearFrom, yearTo)),
      tap((result: NasaImagesSearchResult) => {
        this.allItemsCount = result.collection.metadata.total_hits;
      }),
      switchMap(this.mapNasaImagesToNasaImageItems.bind(this)),
      catchError((err) => {
        console.error('imageSearchServiceError', err);
        return Observable.of(null);
      })
    ).subscribe(value => {
      this.images = value;
    });


    this.nextPageSubscription = this.nextPage$$.pipe(
      distinctUntilChanged(),
      switchMap((nextPage) => this.imageSearchService.getImagesNextPage$(nextPage)),
      switchMap(this.mapNasaImagesToNasaImageItems.bind(this)),
    ).subscribe((images: NasaImageItem[]) => {
      this.images = this.images.concat(images);
    });


    /*   const clicksInFiveSeconds = Observable.fromEvent(document, 'click')
             .takeUntil(Observable.interval(5000));
        const ones = clicksInFiveSeconds.mapTo(1);
        const seed = 0;
        const count = ones.reduce((acc, one) => acc + one, seed);
       count.subscribe(x => console.log(x));*/
  }

  onQueryInput(value: string) {
    this.query$$.next(value);
  }

  onSetYearFrom(value: string, valid: boolean) {
    if (valid) {
      this.yearFrom$$.next(value);
    }
  }

  onSetYearTo(value: string, valid: boolean) {
    if (valid) {
      this.yearTo$$.next(value);
    }
  }

  onScroll($event) {
    if (this.nextPage && $event.target.scrollTop + $event.target.clientHeight + 200 >= $event.target.scrollHeight) {
      if (this.nextPage) {
        this.nextPage$$.next(this.nextPage);
      }
    }
  }

  public ngOnDestroy() {
    this.imagesSubscription.unsubscribe();
    this.nextPageSubscription.unsubscribe();
  }
}
