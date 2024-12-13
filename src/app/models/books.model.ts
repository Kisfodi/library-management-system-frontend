import {Author} from "./author.model";
import {Genre} from "./genre.model";
import {Item} from "./item.model";

export class Book {

  constructor(
    public id:number,
    public title:string,
    public author: Author,
    public genre: Genre|string,
    public numberOfPages: number,
    public items: Item[],
    public publicationYear: number,
    public firstPublicationYear: number,
    // public coverPath: String


  ) {}

}
