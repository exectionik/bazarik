import { Item } from '../models/item';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {REST_API} from "../../environments/environment";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl = 'api/items'

  constructor(private http: HttpClient) { }

  getItem(id: number): Observable<Item> {
    const url = `${REST_API}/detailitem/${id}`;
    return this.http.get<Item>(url)
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(REST_API + '/showitems')
  }

  getSortedItems(sortBy: string): Observable<Item[]> {
    return this.http.get<Item[]>(REST_API + '/sortitems', { params: { parameter: sortBy } })
  }

  addItem(item: Item) {
    return this.http.post(REST_API + '/saveitem', item);
  }

  getUserItems(): Observable<Item[]> {
    return this.http.get<Item[]>(REST_API + '/showuseritems')
  }

  getItemsByCategory(category: Category): Observable<Item[]> {
    return this.http.get<Item[]>(`${REST_API}/showcategory/${category}`);
  }

  deleteItem(item: Item) {
    return this.http.get(REST_API + `/deleteitem/${item.id}`);
  }

  getSearchedItems(searchedBy: string): Observable<Item[]> {
    return this.http.get<Item[]>(REST_API + '/searchitem', { params: { search: searchedBy } })
  }

}
