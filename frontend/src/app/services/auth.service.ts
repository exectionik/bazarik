import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { REST_API } from "../../environments/environment";
import {Person} from "../models/person";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // @ts-ignore
  token: string;

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getToken(): string {
    return this.token;
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

  login(username: string, password: string): Observable<any> {
    const info = btoa(`${username}:${password}`);
    const token = `Basic ${info}`;
    const options = {
      headers: new HttpHeaders({
        Authorization: token,
        'X-Requested-With' : 'XMLHttpRequest'
      }),
      withCredentials: true
    };
    return this.httpClient.get(REST_API + '/currentuser', options).pipe(
      tap(() => this.token = token)
    );
  }

  logout(): void {
    // @ts-ignore
    this.token = null;
  }

}
