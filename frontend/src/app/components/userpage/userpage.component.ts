import { Component, OnInit } from '@angular/core';
import {Item} from "../../models/item";
import {ItemService} from "../../services/item.service";
import {AuthService} from "../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemService: ItemService,
              private AuthService: AuthService) { }

  ngOnInit(): void {
    this.getUserItems();
  }

  getUserItems(): void{
    this.itemService.getUserItems()
      .subscribe(items => this.items = items);
  }

  Submit():void {
    this.AuthService.logout()
  }

  Delete(item: Item): void {
    if (window.confirm("Naozaj chcete odtrániť inzerát")) {
      this.items = this.items.filter(h => h !== item);
      this.itemService.deleteItem(item).subscribe();
    }

  }
}
