import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormspageComponent} from "./components/formspage/formspage.component";
import {ItemDetailComponent} from "./components/item-detail/item-detail.component";
import {ItemsComponent} from "./components/items/items.component";
import {LoginComponent} from "./components/login/login.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {RegisterComponent} from "./components/register/register.component";
import {UserinfoComponent} from "./components/userinfo/userinfo.component";
import {UserpageComponent} from "./components/userpage/userpage.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CategoryComponent } from './components/category/category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import {AuthInterceptor} from "./interceptor/auth.interceptor";
import { EditComponent } from './components/edit/edit.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    FormspageComponent,
    ItemDetailComponent,
    ItemsComponent,
    LoginComponent,
    NavigationComponent,
    RegisterComponent,
    UserinfoComponent,
    UserpageComponent,
    CategoryComponent,
    CategoryListComponent,
    EditComponent,
    UserpageComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
