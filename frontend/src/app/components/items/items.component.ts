import { ItemService } from '../../services/item.service';
import { AppComponent } from '../../app.component';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Item } from '../../models/item'


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  sortBy: string = 'name';
  searchBy: string = 'name';

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  this.getItems();
  }

  getItems(): void{
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  sortItem(sortBy: string){
    this.sortBy = sortBy
    this.sort();
  }
  sort() {
    this.itemService.getSortedItems(this.sortBy)
      .subscribe(items => this.items = items);
  }

  searchItem(searchBy: string){
    this.searchBy = searchBy
    this.search();
  }

  search() {
    this.itemService.getSearchedItems(this.searchBy)
      .subscribe(items => this.items = items);
  }
}
