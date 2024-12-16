import {User} from "./user.model";
import {Item} from "./item.model";
import {RentDate} from "./rent-date.model";

export class Rent {

  constructor(
    public id: number|undefined,
    public userOfRent: User|undefined,
    public itemRented: Item|undefined,
    public rentDate: RentDate,
    public numberOfExtensions: number
  ) {
  }

}
