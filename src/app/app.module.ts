import { SignInGuard } from './sign-in.guard';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { RouterModule, CanActivate } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './subcomponents/home/home.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './subcomponents/category/category.component';
import { SuppliersComponent } from './subcomponents/suppliers/suppliers.component';
import { CustomerComponent } from './subcomponents/customer/customer.component';
import { CustomersComponent } from './subcomponents/customers/customers.component';
import { ProductComponent } from './subcomponents/product/product.component';
import { ProductsComponent } from './subcomponents/products/products.component';
import { PosComponent } from './pos/pos/pos.component';
import { CheckoutComponent } from './pos/checkout/checkout.component';
import { InvoiceComponent } from './pos/invoice/invoice.component';
import { ItemsComponent } from './dashboard/items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    LandingComponent,
    DashboardComponent,
    CategoryComponent,
    SuppliersComponent,
    CustomerComponent,
    CustomersComponent,
    ProductComponent,
    ProductsComponent,
    PosComponent,
    CheckoutComponent,
    InvoiceComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'',redirectTo:'login',pathMatch:'full' },
      { path:'login',component : LoginComponent },
      { path:'dashboard',component : DashboardComponent,canActivateChild: [SignInGuard],children:[
        { path:'',redirectTo:'home',pathMatch:'full' },
        { path:'home',component:HomeComponent},
        { path:'customers',component:CustomersComponent},
        { path:'customer/${id}',component:CustomerComponent},
        { path:'suppliers',component:SuppliersComponent},
        { path:'category',component:CategoryComponent},
        { path:'products',component:ProductsComponent},
        { path:'product/${id}',component:ProductComponent},
        { path:'items',component:ItemsComponent},
        {path : 'sales' , component:CustomerComponent}
        
          
      ] }
    ])
  ],
  providers: [AuthService,AuthGuard,SignInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
