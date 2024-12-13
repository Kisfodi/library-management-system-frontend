import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Author} from "../../models/author.model";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authorUrl = 'api/authors';
  constructor(private http: HttpClient) {}

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorUrl);
  }

  getAuthorById(id: string): Observable<Author> {
    return this.http.get<Author>(this.authorUrl + "/" + id);
  }




}
