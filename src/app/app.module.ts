import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProfilesComponent } from './account/profiles/profiles.component'
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailComponent } from './products/products-detail/products-detail.component';


@NgModule({
  declarations: [
    AccountComponent,
    AppComponent,
    CartComponent,
    ForgotPasswordComponent,
    HomeComponent,
    LoginComponent,
    NavMenuComponent,
    ProductsComponent,
    ProductsDetailComponent,
    ProfilesComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'accounts', component: AccountComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'login', component: LoginComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductsDetailComponent },
  //  { path: 'profile', component: ProfilesComponent },
      { path: 'register', component: RegisterComponent }



    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
