import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestService {

  url = 'http://localhost:3000/cars/';

  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'enctype': 'multipart/form-data;',
      'Accept': 'plain/text',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
    }),
  };

  getCars(): Observable<any> {
    return this.httpClient.get(this.url + 'read')
      .pipe(
        map((response: any) => {
          return response;
        }),
        retry(2),
        catchError(this.handleError<Body>('getCars')))
  }

  createCar(car: any): Observable<any> {
    return this.httpClient.post(this.url + `create`, car, this.httpOptions)
      .pipe(
        map((response: any) => {
          return response;
        }),
        retry(1),
        catchError(this.handleError<Body>('createCar'))
      )
  }

  updateCar(id: any, cars: any): Observable<any> {
    return this.httpClient.put(this.url + `update/${id}`, cars, this.httpOptions)
      .pipe(
        map((response: any) => {
          return response;
        }),
        retry(1),
        catchError(this.handleError<Body>('updateCar'))
      )
  }

  deleteCar(id: any) {
    return this.httpClient.delete(this.url + `delete/${id}`, this.httpOptions)
      .pipe(
        map((response: any) => {
          return response;
        }),
        retry(1),
        catchError(this.handleError<Body>('deleteCar'))
      )
  }

  handleError<T>(operation = 'operation') {
    return (error: any) => {
      const err = error.error;

      return of({'success': err.success, 'Error': `${operation} failed: ${error.message}, ${err.msg}`, status: error.status});
    };
  }

}
