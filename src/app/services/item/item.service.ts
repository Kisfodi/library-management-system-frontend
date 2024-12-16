import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../../models/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {}

  private itemsUrl = 'api/items'

  getItemById(id: string): Observable<Item> {
    return this.http.get<Item>(this.itemsUrl + "/" + id);
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }

  getItemsFiltered(limit: number,
                   currentPageNumber: number,
                   // sort: string,
                   bookTitle: string|undefined,
                   condition: string|undefined,
                   isAvailable: string|undefined): Observable<Item[]> {
    let finalUrl: string = this.itemsUrl + "?limit=" + limit + "&currentPageNumber=" + currentPageNumber + "&sort=desc";

    if (bookTitle) {
      finalUrl = finalUrl + "&bookTitle=" + bookTitle;
    }

    if (condition) {
      finalUrl = finalUrl + "&condition=" + condition;
    }

    if (isAvailable) {
      finalUrl = finalUrl + "&isAvailable=" + isAvailable;
    }
    return this.http.get<Item[]>(finalUrl);
  }

  setItemToAvailable(id: string) {
    this.http.put<Item>(this.itemsUrl + "/" + id + "available", null);
  }

  setItemToNotAvailable(id: string) {
    this.http.put<Item>(this.itemsUrl + "/" + id + "notAvailable", null);
  }



}
