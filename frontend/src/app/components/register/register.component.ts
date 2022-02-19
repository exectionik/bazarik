import { Component, OnInit } from '@angular/core';
import { Person } from "../../models/person";
import {PersonService} from "../../services/person.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.email),
    password: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    phoneNumber: new FormControl("", Validators.required),
  });
  hide=true;
  get submit(): boolean {
    return this.userForm.valid;
  }

  constructor(private personService:PersonService,
              private readonly router: Router) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    this.personService.addUser(this.userForm.value)
      .subscribe(() => this.router.navigateByUrl('/login'));
  }
  myFunction():void{

  }
}
