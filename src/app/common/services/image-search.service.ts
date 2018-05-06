import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {NasaImagesSearchResult} from '../classes/nasa-images';
import {catchError} from 'rxjs/operators';
import {BASE_URL, BASE_URL_TOKEN} from '../config';

@Injectable()
export class ImageSearchService {

  constructor(private _http: HttpClient,
              @Inject(BASE_URL_TOKEN) private _baseUrl: string) {
  }

  public getImages$(query: string, yearFrom?: string, yearTo?: string): Observable<NasaImagesSearchResult> {
    const params = {q: query};
    if (yearFrom) {
      params['year_start'] = yearFrom;
    }
    if (yearTo) {
      params['year_end'] = yearTo;
    }
    return this._http.get<NasaImagesSearchResult>(
      this._baseUrl,
      {
        params: params
      })
      .pipe(catchError(err => {
          console.error('getImages$', err);
          return Observable.of(null);
        }
      ));
  }

  public getImagesNextPage$(url: string): Observable<NasaImagesSearchResult> {
    if (url != null) {
      return this._http.get<NasaImagesSearchResult>(url)
        .pipe(catchError(err => {
            console.error('getImagesNextPage$', err);
            return Observable.of(null);
          }
        ));
    } else { return Observable.of(null); }
  }

}
