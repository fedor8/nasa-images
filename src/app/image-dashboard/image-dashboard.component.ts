import { Component, OnInit } from '@angular/core';
import {ImageSearchService} from '../services/image-search.service';
import {Observable} from 'rxjs/Observable';
import {NasaImages} from '../classes/nasa-images';

@Component({
  selector: 'nasa-image-dashboard',
  templateUrl: './image-dashboard.component.html',
  styleUrls: ['./image-dashboard.component.css']
})
export class ImageDashboardComponent implements OnInit {

  public query: string;

  public imageSearchService: ImageSearchService;

  public images$: Observable<NasaImages>;

  constructor(_imageSearchService: ImageSearchService) {
    this.imageSearchService = _imageSearchService;
  }

  ngOnInit() {
  }

  onInput(value: string) {
    this.images$ = this.imageSearchService.getImages$(value);
  }
}
