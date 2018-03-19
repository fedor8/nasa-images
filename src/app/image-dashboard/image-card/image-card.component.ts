import {Component, Input, OnInit} from '@angular/core';
import {NasaImageItem} from '../../classes/nasa-image-item';
import {NasaImageData} from '../../classes/nasa-image-data';

@Component({
  selector: 'nasa-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {

  @Input()
  public imageItem: NasaImageItem;

  constructor() { }

  ngOnInit() {
  }

}
