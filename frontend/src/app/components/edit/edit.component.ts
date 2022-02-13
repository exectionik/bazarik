import { Component, OnInit } from '@angular/core';
import {Item} from "../../models/item";
import {ItemService} from "../../services/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {mergeMap} from "rxjs";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  item?: Item;
  editForm?: FormGroup;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0);
    this.itemService.getItem(id).subscribe(item => {
      this.item = item;
      this.editForm = new FormGroup({
        name: new FormControl(item.name, [Validators.required]),
        price: new FormControl(item.price, [Validators.required, Validators.min(0)]),
        description: new FormControl(item.description, [Validators.required]),
        category: new FormControl(item.category, [Validators.required]),
        image: new FormControl(item.image),
      });
    });
  }

  submit(): void {
    const item: Item = {...this.item, ...this.editForm?.value};

    this.itemService.editItem(item.id, item).pipe(
      mergeMap(() => this.router.navigate(['/detail', item.id])),
    ).subscribe();
  }

  delete(): void{
    if (window.confirm("Naozaj chcete odtrániť inzerát")){
      const item: Item = {...this.item, ...this.editForm?.value};
      this.itemService.deleteItem(item).pipe(
        mergeMap(() => this.router.navigate(['/category'])),
      ).subscribe();
    }

  }


}
