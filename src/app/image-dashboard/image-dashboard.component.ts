import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {ImageSearchService} from '../services/image-search.service';
import {Observable} from 'rxjs/Observable';
import {NasaImages} from '../classes/nasa-images';
import {Subject} from 'rxjs/Subject';
import {catchError, debounceTime, switchMap, combineLatest} from 'rxjs/operators';
import 'rxjs/add/observable/of';

@Component({
  selector: 'nasa-image-dashboard',
  templateUrl: './image-dashboard.component.html',
  styleUrls: ['./image-dashboard.component.css']
})
export class ImageDashboardComponent implements OnInit, AfterViewInit {

  public imageSearchService: ImageSearchService;

  public images$: Observable<NasaImages>;

  public query$$ = new Subject<string>();
  public yearFrom$$ = new Subject<string>();
  public yearTo$$ = new Subject<string>();

  public initValue: string;

  constructor(_imageSearchService: ImageSearchService) {
    this.imageSearchService = _imageSearchService;
  }

  ngOnInit() {
    this.images$ = this.query$$.pipe(debounceTime(500)).pipe(
      combineLatest(
        this.yearFrom$$.pipe(debounceTime(500)),
        this.yearTo$$.pipe(debounceTime(500)),
        (query, yearFrom, yearTo) => ({query, yearFrom, yearTo})
      ),
      switchMap(({query, yearFrom, yearTo}) => this.imageSearchService.getImages$(query, yearFrom, yearTo)),
      catchError((err) => {
        console.error('imageSearchServiceError', err);
        return Observable.of(null);
      })
    );
    this.initValue = 'Planetary Nebula';

  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.initValue);
    this.query$$.next(this.initValue);
    this.yearFrom$$.next(null);
    this.yearTo$$.next(null);
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
}
