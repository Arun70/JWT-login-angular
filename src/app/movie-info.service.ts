import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MovieObject } from './interface/movieObject';

@Injectable({
  providedIn: 'root'
})
export class MovieInfoService {

  constructor(private http: HttpClient,) { }

  getMovieInfo(): Observable<any> {
    let api = `https://demo.credy.in/api/v1/maya/movies/`;
    return this.http.get<MovieObject>(api).pipe(map((res) => {
      return res || {};
      }),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
