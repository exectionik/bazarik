import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {EMPTY, Observable} from "rxjs";
import {Person} from "../../models/person";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  title = 'predaj.to';
  user$: Observable<Person | null> = EMPTY;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user$ = this.authService.user$;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/category');
  }

}
