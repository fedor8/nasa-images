import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {ImageSearchService} from '../services/image-search.service';
import {Observable} from 'rxjs/Observable';
import {NasaImages} from '../classes/nasa-images';
import {Subject} from 'rxjs/Subject';
import {catchError, debounceTime, switchMap} from 'rxjs/operators';
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
  public initValue: string;

  constructor(_imageSearchService: ImageSearchService) {
    this.imageSearchService = _imageSearchService;
  }

  ngOnInit() {
    this.images$ = this.query$$.asObservable().pipe(
      debounceTime(500),
      switchMap((query) => this.imageSearchService.getImages$(query)),
      catchError((err) => {
        console.error('imageSearchServiceError', err);
        return Observable.of(null);
      }));
    this.initValue = 'Planetary Nebula';

  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.initValue);
    this.query$$.next(this.initValue);
  }

  onInput(value: string) {
    this.query$$.next(value);
  }
}
