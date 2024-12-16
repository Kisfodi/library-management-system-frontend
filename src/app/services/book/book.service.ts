import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../../models/books.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'api/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(this.booksUrl + "/" + id);
  }

  getBooksFiltered(limit: number,
                   currentPageNumber: number,
                   sort: string,
                   sortKeyWord: string,
                   filterKeyword: string[]|undefined,
                   filterValue: string[]|undefined,
                   filterOperator: string[]|undefined) {

    let finalUrl = this.booksUrl;

    let urlBasic: string[] = [];

    urlBasic.push("limit=" + limit);

    urlBasic.push("currentPageNumber=" + currentPageNumber);
    urlBasic.push("sort=" + sort);
    urlBasic.push("sortKeyWord=" + sortKeyWord)

    let filterKeyUrl: string[] = [];
    let filterValueUrl: string[] = [];
    let filterOperatorUrl: string[] = [];

    if (filterKeyword) {
      for (let i = 0; i < filterKeyword.length; i++) {
        filterKeyUrl.push("filterKeyword=" + filterKeyword.at(i));
      }
    }

    if (filterValue) {
      for (let i = 0; i < filterValue.length; i++) {
        filterValueUrl.push("filterValue=" + filterValue.at(i));
      }
    }

    if (filterOperator) {
      for (let i = 0; i < filterOperator.length; i++) {
        filterOperatorUrl.push("filterOperator=" + filterOperator.at(i));
      }
    }

    if (urlBasic.length > 0 || filterKeyUrl.length > 0) {
      finalUrl = finalUrl + "?";
    }

    for (let i = 0; i < urlBasic.length; i++) {
      finalUrl = finalUrl + urlBasic.at(i);
      finalUrl = finalUrl + "&";
    }

    for (let i = 0; i < filterKeyUrl.length; i++) {
      finalUrl = finalUrl + filterKeyUrl.at(i);
      finalUrl = finalUrl + "&";
      finalUrl = finalUrl + filterValueUrl.at(i);

      if (filterOperatorUrl.length > 0 && i < filterKeyUrl.length - 1) {
        finalUrl = finalUrl + "&";
        finalUrl = finalUrl + filterOperatorUrl.at(i);
        finalUrl = finalUrl + "&";
      }

    }

    finalUrl = finalUrl.substring(0, finalUrl.length);

    return this.http.get<Book[]>(finalUrl)



  }

}


