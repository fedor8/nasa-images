import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {ImageSearchService} from '../services/image-search.service';
import {Observable} from 'rxjs/Observable';
import {NasaImages} from '../classes/nasa-images';
import {Subject} from 'rxjs/Subject';
import {catchError, debounceTime, switchMap, combineLatest, startWith, concatAll, concat, bufferWhen} from 'rxjs/operators';
import 'rxjs/add/observable/of';
import {NasaPageLink} from '../classes/nasa-page-link';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/reduce';

@Component({
  selector: 'nasa-image-dashboard',
  templateUrl: './image-dashboard.component.html',
  styleUrls: ['./image-dashboard.component.css']
})
export class ImageDashboardComponent implements OnInit {

  public imageSearchService: ImageSearchService;

  public images$: Observable<NasaImages>;

  public query$$ = new Subject<string>();
  public yearFrom$$ = new Subject<string>();
  public yearTo$$ = new Subject<string>();
  public nextPage$$ = new Subject<string>();


  public initValue: string;

  constructor(_imageSearchService: ImageSearchService) {
    this.imageSearchService = _imageSearchService;
  }

  ngOnInit() {
    this.initValue = 'Planetary Nebula';
    this.images$ = this.query$$.pipe(
      startWith(this.initValue),
      debounceTime(500),
      combineLatest(
        this.yearFrom$$.pipe(startWith(null), debounceTime(500)),
        this.yearTo$$.pipe(startWith(null), debounceTime(500)),
        (query, yearFrom, yearTo) => ({query, yearFrom, yearTo})
      ),
      switchMap(({query, yearFrom, yearTo}) => this.imageSearchService.getImages$(query, yearFrom, yearTo)),
/*      bufferWhen(
        () => this.nextPage$$.pipe(
          startWith(null),
          debounceTime(500),
          switchMap((nextPageUrl) => this.imageSearchService.getImagesNextPage$(nextPageUrl))
        )
      ),*/
      catchError((err) => {
        console.error('imageSearchServiceError', err);
        return Observable.of(null);
      })
    );

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
    console.log('onSetYearFrom', valid, value);
    if (valid) {
      console.log('onSetYearFrom valid');
      this.yearFrom$$.next(value);
    }
  }

  onSetYearTo(value: string, valid: boolean) {
    console.log('onSetYearTo', valid, value);
    if (valid) {
      console.log('onSetYearTo valid');
      this.yearTo$$.next(value);
    }
  }

  onScroll($event, links: NasaPageLink[]) {
    console.log('onScroll', $event.target.scrollTop, $event.target.clientHeight, $event.target.scrollHeight);
    if (links && links.length > 0 && $event.target.scrollTop + $event.target.clientHeight + 200 >= $event.target.scrollHeight) {
      console.error('BOTTOM');
      const nextLink: NasaPageLink = links.find((element, index, array) => element.rel === 'next');
      if (nextLink) {
        this.nextPage$$.next(nextLink.href);
      }
    }
  }
}
