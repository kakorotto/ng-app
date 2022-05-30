import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { FavoriteProductComponent } from './product/favorite-product/favorite-product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { StringSlicePipe } from './string-slice.pipe';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { AllPhotosComponent } from './all-photos/all-photos.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContainerComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    AsideComponent,
    FooterComponent,
    TodoListComponent,
    ProductCardComponent,
    FavoriteProductComponent,
    ProductListComponent,
    StringSlicePipe,
    ProductDetailsComponent,
    UserDetailsComponent,
    AllPhotosComponent,
    LoginComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
