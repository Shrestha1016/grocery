import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PageComponent } from './page/page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './user/user.component';
import { UsersidebarComponent } from './usersidebar/usersidebar.component';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';
import { SalessidebarComponent } from './salessidebar/salessidebar.component';
import { CategoryComponent } from './category/category.component';
import { DebtorComponent } from './debtor/debtor.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CustomerComponent } from './customer/customer.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ContentComponent,
    ContactComponent,
    AboutComponent,
    PageComponent,
    NavigationComponent,
    SidebarComponent,
    ProductComponent,
    ErrorComponent,
    UserComponent,
    UsersidebarComponent,
    ProductsComponent,
    SalesComponent,
    SalessidebarComponent,
    CategoryComponent,
    DebtorComponent,
    SupplierComponent,
    CustomerComponent,
    LogoutComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
