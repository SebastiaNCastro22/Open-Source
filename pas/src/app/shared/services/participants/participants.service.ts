import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor(private http: HttpClient) { }

  basePath = 'http://localhost:3000/api/v1/participants';

  getAll() {
    return this.http.get(this.basePath)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }
}
