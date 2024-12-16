import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../models/books.model";
import {RouterLink} from "@angular/router";
import {BookService} from "../services/book/book.service";

@Component({
  selector: 'app-books',
  // imports: [
  //   RouterLink
  // ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit{

  @Input() books!: Book[];
  private allBooks!: Book[];

  constructor(public bookService: BookService) {
  }

  private initBooks() {
    this.bookService.getBooks()
      .subscribe(books => this.allBooks = books);
  }

  ngOnInit(): void {
    this.initBooks();
  }
}
