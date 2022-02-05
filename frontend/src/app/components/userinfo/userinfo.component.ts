import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import {Person} from "../../models/person";
import {AuthService} from "../../services/auth.service";
import {EMPTY, Observable} from "rxjs";

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  user$: Observable<Person | null> = EMPTY;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.user$ = this.authService.user$;
  }

  goBack(): void {
    this.location.back();
  }

}
