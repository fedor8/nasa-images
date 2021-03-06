import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {MatCardModule, MatDividerModule, MatGridListModule, MatInputModule, MatTooltipModule} from '@angular/material';

import {AppComponent} from './app.component';
import {ImageDashboardComponent} from './image-dashboard/image-dashboard.component';
import {ImageSearchService} from './common/services/image-search.service';
import {HttpClientModule} from '@angular/common/http';
import {ImageCardComponent} from './image-dashboard/image-card/image-card.component';
import {BASE_URL, BASE_URL_TOKEN} from './common/config';


@NgModule({
  declarations: [
    AppComponent,
    ImageDashboardComponent,
    ImageCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule, MatCardModule, MatGridListModule, MatTooltipModule, MatDividerModule,
    HttpClientModule
  ],
  providers: [
    ImageSearchService,
    {
      provide: BASE_URL_TOKEN,
      useValue: BASE_URL,
      multi: false
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
