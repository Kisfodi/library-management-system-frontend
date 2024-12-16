import {Component, OnInit} from '@angular/core';
import {Book} from "../models/books.model";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../services/book/book.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit{

  book!: Book;

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.initAuthor();
  }

  initAuthor() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.bookService.getBookById(id.toString())
      .subscribe(book => this.book = book);
  }

  goBack() {
    this.location.back();
  }

}
