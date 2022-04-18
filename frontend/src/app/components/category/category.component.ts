import { Component, OnInit } from '@angular/core';
import {Item} from "../../models/item";
import {Category} from "../../models/category";
import {ItemService} from "../../services/item.service";
import {ActivatedRoute} from "@angular/router";
import {EMPTY, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  items: Item[] = [];
  sortBy: string = 'name';

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    const category = this.route.snapshot.paramMap.get('category');

    if (category) {
      this.titleService.setTitle(`${category[0]}${category.substring(1).toLowerCase()} - predajto`);

      this.itemService.getItemsByCategory(category as Category)
        .subscribe(items => this.items=items);
    }
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
