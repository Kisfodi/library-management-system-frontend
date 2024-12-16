import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksComponent} from "./books.component";
import {RouterLink, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BookDetailsModule} from "../book-details/book-details.module";
import {BooksRoutingModule} from "./books-routing.module";



@NgModule({
  declarations: [BooksComponent],
  exports: [
    BooksComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    BooksRoutingModule,
    RouterModule,
    BookDetailsModule
  ]
})
export class BooksModule { }
