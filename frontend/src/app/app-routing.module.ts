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
  { path: '', component: ItemsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'category', component: CategoryListComponent},
  { path: 'category/:category', component: CategoryComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'items', component:FormspageComponent},
  {path:'detail/:id', component:ItemDetailComponent},
  {path:'user', component:UserinfoComponent, canActivate: [AuthGuard]},
  {path:'saveitem', component:FormspageComponent, canActivate: [AuthGuard]},
  {path:'edit/:id', component:EditComponent, canActivate: [AuthGuard]},
  {path:'deleteitem/:id',component:UserpageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
