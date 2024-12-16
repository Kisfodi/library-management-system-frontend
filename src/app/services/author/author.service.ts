import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Author} from "../../models/author.model";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {}
  private authorUrl = 'api/authors';

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorUrl);
  }

  getAuthorById(id: string): Observable<Author> {
    return this.http.get<Author>(this.authorUrl + "/" + id);
  }




}
