import {Book} from "./books.model";
import {Condition} from "./condition.model";

export class Item {

  constructor(
    public id: number,
    public book: Book,
    public isAvailable: boolean,
    public condition: Condition|string
  ) {}

}
