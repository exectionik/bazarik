import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import {Person} from "../../models/person";
import {EMPTY, Observable} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item?: Item;
  person?: Person;
  currentUser$: Observable<Person | null> = EMPTY;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemService: ItemService,
    private authService: AuthService,
    private titleService: Title,
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.itemService.getItem(id)
      .subscribe(item => {
        this.item = item;
        this.person = item.person;

        this.titleService.setTitle(`${item.name} - predajto`);
      });
    this.currentUser$ = this.authService.user$;
  }

  goBack(): void {
    this.location.back();
  }
}
