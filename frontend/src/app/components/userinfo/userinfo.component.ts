import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import {PersonService} from "../../services/person.service";
import {Person} from "../../models/person";

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  person?: Person;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private personService: PersonService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  goBack(): void {
    this.location.back();
  }

  getUserInfo(): void{
    this.personService.getUserInfo()
      .subscribe(persons => this.person = persons);
  }

}
