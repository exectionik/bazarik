import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ItemsComponent} from "./components/items/items.component";
import {LoginComponent} from "./components/login/login.component";
import {CategoryListComponent} from "./components/category-list/category-list.component";
import {CategoryComponent} from "./components/category/category.component";
import {RegisterComponent} from "./components/register/register.component";
import {FormspageComponent} from "./components/formspage/formspage.component";
import {ItemDetailComponent} from "./components/item-detail/item-detail.component";
import {UserinfoComponent} from "./components/userinfo/userinfo.component";
import {EditComponent} from "./components/edit/edit.component";
import {AuthGuard} from "./guard/auth.guard";
import {UserpageComponent} from "./components/userpage/userpage.component";

const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'category', component: CategoryListComponent, data: { title: 'Categories' }},
  { path: 'category/:category', component: CategoryComponent },
  { path: 'register', component: RegisterComponent, data: { title: 'Register' } },
  {path: 'items', component:FormspageComponent, data: { title: 'Items' }},
  {path:'detail/:id', component:ItemDetailComponent, data: { title: 'Loading...' }},
  {path:'user', component:UserinfoComponent, canActivate: [AuthGuard], data: { title: 'Profile' }},
  {path:'saveitem', component:FormspageComponent, canActivate: [AuthGuard], data: { title: 'Create Post' }},
  {path:'edit/:id', component:EditComponent, canActivate: [AuthGuard], data: { title: 'Edit Post' }},
  {path:'deleteitem/:id',component:UserpageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
