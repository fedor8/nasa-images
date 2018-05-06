import {AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ImageSearchService} from '../common/services/image-search.service';
import {Observable} from 'rxjs/Observable';
import {NasaImages} from '../common/classes/nasa-images';
import {Subject} from 'rxjs/Subject';
import {
  catchError, debounceTime, switchMap, combineLatest, startWith, concatAll, concat, bufferWhen,
  distinctUntilChanged
} from 'rxjs/operators';
import 'rxjs/add/observable/of';
import {NasaPageLink} from '../common/classes/nasa-page-link';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/reduce';
import {NasaImageItem} from '../common/classes/nasa-image-item';
import {Subscription} from 'rxjs/Subscription';

const INIT_VALUE = 'Planetary Nebula';

@Component({
  selector: 'nasa-image-dashboard',
  templateUrl: './image-dashboard.component.html',
  styleUrls: ['./image-dashboard.component.css']
})
export class ImageDashboardComponent implements OnInit, OnDestroy {

  public imageSearchService: ImageSearchService;

  public images$: Observable<NasaImageItem[]>;
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

  mapNasaImagesToNasaImageItems(nasaImages: NasaImages) {
    if (nasaImages.collection.links) {
      const nextLink = nasaImages.collection.links.find((element, index, array) => element.rel === 'next');
      if (nextLink) {
        this.nextPage = nextLink.href;
      }
    } else {
      this.nextPage = null;
    }
    this.allItemsCount = nasaImages.collection.metadata.total_hits;
    return Observable.of(nasaImages.collection.items);
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
      switchMap(() =>  this.imageSearchService.getImagesNextPage$(this.nextPage)),
      switchMap(this.mapNasaImagesToNasaImageItems.bind(this))
    ).subscribe((value: NasaImageItem[]) => {
      this.images = this.images.concat(value);
    });


    /*   const clicksInFiveSeconds = Observable.fromEvent(document, 'click')
             .takeUntil(Observable.interval(5000));
        const ones = clicksInFiveSeconds.mapTo(1);
        const seed = 0;
        const count = ones.reduce((acc, one) => acc + one, seed);
       count.subscribe(x => console.log(x));*/
  }

  onInput(value: string) {
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
      console.error('BOTTOM');
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
