import { Component } from '@angular/core';
import {Book} from "../models/books.model";
import {BookService} from "../services/book/book.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  books: Book[] = [];

  constructor(private bookService: BookService) {

  }

  ngOnInit(): void {
    this.initBooks();
  }

  initBooks() {
/*    this.bookService.getBooksFiltered(5,
      0,
      "asc",
      "title",
      undefined,
      undefined,
      undefined)*/
    this.bookService.getBooks()
      .subscribe((books) => {
        this.books = books;
      });
  }

}
