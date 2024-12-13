import {User} from "./user.model";
import {Item} from "./item.model";
import {RentDate} from "./rent-date.model";

export class Rent {

  constructor(
    public id: number|undefined,
    public user: User,
    public item: Item,
    public rentDate: RentDate,
    public numOfExtensions: number
  ) {
  }

}
