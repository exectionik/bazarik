import { Component, OnInit } from '@angular/core';
import {Item} from "../../models/item";
import { Observable, Subject } from 'rxjs';
import {ItemService} from "../../services/item.service";
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {

  items: Item[] = [];
  sortBy: string = 'name';
  /*items$: Observable<Item[]>;*/

  private searchTerms = new Subject<string>();

  constructor(private itemService: ItemService) { }



  ngOnInit(): void {
    /*this.items$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.itemService.searchItems(term)),
    );*/
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  sortItem(sortBy: string){
    this.sortBy = sortBy
    this.sort();
  }

  sort() {
    if (this.sortBy === 'name')
      this.items.sort((a, b) => a.name.localeCompare(b.name));

    if (this.sortBy === 'price')
      this.items.sort((a, b) => a.price > b.price ? 1 : -1);
  }
}
