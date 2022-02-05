import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from "../models/person";
import {REST_API} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

    addUser(user: Person) {
      return this.http.post(REST_API + '/register', user);
  }

  getUserInfo(): Observable<Person> {
    const url = `${REST_API}/currentuser`;
    return this.http.get<Person>(url)
  }
}
