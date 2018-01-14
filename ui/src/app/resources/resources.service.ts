import { Injectable } from '@angular/core';
import { RESY } from './mock-resources';
import { Element } from './element';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ResourcesService {

private resourcesUrl = 'api/resources';

constructor(
  private http: HttpClient
) { }

  public get(): Observable<Element[]>  {
    return this.http.get<Element[]>(this.resourcesUrl)
      .pipe(
        catchError(this.handleError('get', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
