import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCardComponent } from './product/product-list/product-card/product-card.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todolists', component: TodoListComponent },
  { path: 'productlist', component:ProductListComponent  },
  { path: 'productdetails', component:ProductListComponent  },
  { path: 'productdetails/:id', component: ProductCardComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'product-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
