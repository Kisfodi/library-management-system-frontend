import {Component, Input, OnInit} from '@angular/core';
import {Rent} from "../models/rent.model";
import {RentService} from "../services/rent/rent.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {User} from "../models/user.model";
import {Item} from "../models/item.model";
import {RentDate} from "../models/rent-date.model";
import {UserService} from "../services/user/user.service";
import {ItemService} from "../services/item/item.service";
import {HttpHeaders, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-rents',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './rents.component.html',
  styleUrl: './rents.component.css'
})
export class RentsComponent implements OnInit{

  // @Input("userOfBet") userOfBet: User|undefined|null;
  // @Input("itemRented") itemRented: Item|undefined|null;

  rent: Rent|undefined;
  rents: Rent[]|undefined;

  constructor(public rentService: RentService) {}

  ngOnInit() {
    this.initRents();
  }

  initRents(): void {
    this.rentService.getRents()
      .subscribe(rents => {
        this.rents = rents;
      })
  }

  rentForm = new FormGroup({
    userName: new FormControl("", Validators.required),
    itemId: new FormControl("", Validators.required)
  })

  get userName() {
    return this.rentForm.get("userName");
  }

  get itemId() {
    return this.rentForm.get("itemId");
  }

  onSubmit() {

    const rentFormValue = this.rentForm.value;
    if (this.rent && rentFormValue.userName && rentFormValue.itemId) {
      var newUser = undefined;
      var newItem = undefined;

      this.rent.userOfRent!.username = rentFormValue.userName;
      this.rent.itemRented!.id = Number(rentFormValue.itemId);

      var currentRent = this.rent;
      this.rentService.submitRent(currentRent)
        .subscribe(rent => {
          this.initRents();
        });
        this.rent = undefined;
    }
  }

  addNewRent() {

    let currentDate = new Date();
    this.rent = {
      id: undefined,
      userOfRent: new User("", ""),
      itemRented: new Item(undefined, undefined, true, ""),
      rentDate: new RentDate(undefined, currentDate, undefined, new Date(currentDate.getDate() + 14)),
      numberOfExtensions: 0
    }
  }
  returnRent(rent: Rent) {

    this.rentService.returnItem(rent)
      .subscribe(rent => {
        this.initRents();
      });
  }
  extendDeadline(rent: Rent) {
    this.rentService.extendDeadline(rent)
      .subscribe(rent => {
        this.initRents();
      })

  }
  deleteRent(rent: Rent) {
    this.rentService.deleteRent(rent)
      .subscribe(resp => {
        this.initRents();
      })
  }
}
