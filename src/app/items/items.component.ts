import {Component, OnInit} from '@angular/core';
import {ItemService} from "../services/item/item.service";
import {Item} from "../models/item.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit{

  items: Item[]|undefined;

  constructor(public itemService: ItemService) {
  }

  ngOnInit(): void {
    this.initItems();
  }

  initItems () {
    this.itemService.getItems()
      .subscribe(items => {
        this.items = items;
      })
  }

}
