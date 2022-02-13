import { Component, OnInit } from '@angular/core';
import {Item} from "../../models/item";
import {Category} from "../../models/category";
import {ItemService} from "../../services/item.service";
import {ActivatedRoute} from "@angular/router";
import {EMPTY, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  items: Observable<Item[]> = EMPTY;


  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const category = this.route.snapshot.paramMap.get('category');

    if (!!category) {
      this.items = this.itemService.getItemsByCategory(category as Category);
    }
  }



}
