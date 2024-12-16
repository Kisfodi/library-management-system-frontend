import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BooksComponent} from "./books.component";
import {AuthorDetailsComponent} from "../author-details/author-details.component";
import {BookDetailsComponent} from "../book-details/book-details.component";

const routes: Routes = [
  {
    path: "", component: BooksComponent,
  },
  {
    path: 'book-details/:id', component: BookDetailsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
