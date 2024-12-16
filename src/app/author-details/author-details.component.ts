import {Component, Input, OnInit} from '@angular/core';
import {Author} from "../models/author.model";
import {ActivatedRoute} from "@angular/router";
import {AuthorService} from "../services/author/author.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-author-details',
  // standalone: true,
  // imports: [],
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit{

  author!: Author;

  constructor(private route: ActivatedRoute,
              private authorService: AuthorService,
              private location: Location) {
  }

  ngOnInit(): void {
    console.log("Hello");
    this.initAuthor();
  }

  initAuthor() {
    console.log(this.route);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.authorService.getAuthorById(id.toString())
      .subscribe(author => this.author = author);
  }

  goBack() {
    this.location.back()
  }

}
