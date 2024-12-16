import {Book} from "./books.model";

export class Author {
  constructor(
    public id:number,
    public name: String,
    public dateOfBirth: Date,
    public dateOfDeath: Date|undefined,
    public placeOfBirth: String,
    public placeOfDeath: String|undefined,
    public books: Book[],
    public portraitPath: string|undefined
  ) {}
}
