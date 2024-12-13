import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Rent} from "../../models/rent.model";


@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private http: HttpClient) { }

  private rentsUrl = 'api/rents';

  getRents(): Observable<Rent[]> {
    return this.http.get<Rent[]>(this.rentsUrl);
  }

  getRentById(id: number): Observable<Rent> {
    return this.http.get<Rent>(this.rentsUrl + "/" + id);
  }

  getRentsFiltered(user: string|undefined,
                   id: string|undefined,
                   isAvailable: string|undefined,
                   checkReturnDate: boolean|undefined,
                   isDeadlineExtended: boolean|undefined)
  {

    let urlFilters: string[] = [];

    if (user)
      urlFilters.push("user=" + user);
    if (id)
      urlFilters.push("id=" + id);
    if (isAvailable)
      urlFilters.push("isAvailable=" + isAvailable);
    if (checkReturnDate == undefined)
      urlFilters.push("checkReturnDate=" + checkReturnDate);
    if (isDeadlineExtended == undefined)
      urlFilters.push("isDeadlineExtended=" + isDeadlineExtended);

    let finalUrl: string = this.rentsUrl;
    if (urlFilters.length > 0)
      finalUrl = finalUrl + "?";

    for (let i = 0; i < urlFilters.length; i++) {
      finalUrl = finalUrl + urlFilters.at(i);
      finalUrl = finalUrl + "&";
    }

    finalUrl = finalUrl.substring(0, finalUrl.length-1);

    return this.http.get<Rent[]>(finalUrl)
      .pipe(retry(3), catchError(this.handleError));

  }

  submitRent(rent: Rent, itemId: number|undefined) {
    return this.http.post<Rent>(this.rentsUrl
      + "/" + rent.user.username
      + "/" + itemId,
      rent)
      .pipe(catchError(this.handleError));
  }

  deleteRent(rent: Rent, itemId: number|undefined) {
    return this.http.delete(this.rentsUrl
    + "/" + rent.user.username
    + "/" + itemId).pipe(catchError(this.handleError));
  }

  returnItem(rent: Rent, itemId: number|undefined) {
    this.http.put<Rent>(
      this.rentsUrl
    + "/" + rent.user.username
    + "/" + itemId, null).pipe(catchError(this.handleError));
  }

  extendDeadline(rent: Rent, itemId: number|undefined) {
    this.http.put<Rent>(
      this.rentsUrl + "/extend/"
      + rent.user.username + "/" + itemId, null)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred: ', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error('Something bad happened'));
  }





}
