import {Author} from "./author.model";
import {Genre} from "./genre.model";
import {Item} from "./item.model";

export class Book {

  constructor(
    public id:number,
    public title:string,
    public author: Author,
    public genre: Genre,
    public items: Item[],
    public numberOfPages: number,
    public publicationYear: number,
    public firstPublicationYear: number,
    public coverPath: string|undefined


  ) {}

}
