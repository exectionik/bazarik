import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import {PersonService} from "../../services/person.service";
import {Person} from "../../models/person";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item?: Item;
  person?: Person;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemService: ItemService,
    private personService: PersonService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.itemService.getItem(id)
      .subscribe(item => {
        this.item = item; this.person = item.person;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
