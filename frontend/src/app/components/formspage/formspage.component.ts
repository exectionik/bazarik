import { Component, OnInit } from '@angular/core';
import { Item } from "../../models/item";
import {PersonService} from "../../services/person.service";
import {ItemService} from "../../services/item.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Person} from "../../models/person";
import { Router } from '@angular/router';


@Component({
  selector: 'app-formspage',
  templateUrl: './formspage.component.html',
  styleUrls: ['./formspage.component.css']
})
export class FormspageComponent implements OnInit {

  itemForm = new FormGroup({
    name: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    image: new FormControl(""),
  });

  get submit(): boolean {
    return this.itemForm.valid;
  }

  constructor(private itemService:ItemService,
              private readonly router: Router) { }

  ngOnInit(): void {
  }

  addItem():void{
    this.itemService.addItem(this.itemForm.value)
      .subscribe(() => this.router.navigateByUrl('/items'));
  }
}
