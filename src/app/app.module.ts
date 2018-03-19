import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ImageDashboardComponent } from './image-dashboard/image-dashboard.component';
import {ImageSearchService} from './services/image-search.service';
import {HttpClientModule} from '@angular/common/http';
import { ImageCardComponent } from './image-dashboard/image-card/image-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageDashboardComponent,
    ImageCardComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatInputModule, HttpClientModule
  ],
  providers: [ImageSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
