import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {NasaImages} from '../classes/nasa-images';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ImageSearchService {

  constructor(private _http: HttpClient) {
  }

  public getImages$(query: string): Observable<NasaImages> {
    return this._http.get<NasaImages>('https://images-api.nasa.gov/search', {params: {q: query}})
      .pipe(catchError(err => {
          console.error('getImages$', err);
          return Observable.of(null);
        }
      ));
  }

}
