import {Book} from "./books.model";
import {Condition} from "./condition.model";

export class Item {

  constructor(
    public id: number|undefined,
    public book: Book|undefined,
    public isAvailable: boolean,
    public condition: Condition|string
  ) {}

}
