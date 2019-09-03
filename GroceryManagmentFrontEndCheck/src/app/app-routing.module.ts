import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageComponent } from './page/page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';
import { DebtorComponent } from './debtor/debtor.component';
import { CategoryComponent } from './category/category.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CustomerComponent } from './customer/customer.component';
import { RouteguardService } from './Service/routeguard.service';
import { AdminService } from './Service/admin.service';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'page', component: PageComponent , canActivate:[RouteguardService]},
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[RouteguardService] },
  { path: 'about', component: AboutComponent,canActivate:[RouteguardService] },
  { path: 'contact', component: ContactComponent ,canActivate:[RouteguardService]},
  { path: 'category', component: CategoryComponent,canActivate:[RouteguardService] },
  { path: 'show/category/:id/products', component: ProductComponent,canActivate:[RouteguardService] },
  // { path: 'show/products', component: ProductComponent,canActivate:[RouteguardService] },
  { path: 'debtor', component: DebtorComponent,canActivate:[RouteguardService] },
  { path: 'show/all/products', component: ProductsComponent,canActivate:[RouteguardService] },
  { path: 'user', component: UserComponent,canActivate:[RouteguardService,AdminService] },
  {
    path: 'sales', component: SalesComponent,
    runGuardsAndResolvers: 'always'
    ,canActivate:[RouteguardService,AdminService]
  },
  { path: 'customer', component: CustomerComponent,canActivate:[RouteguardService,AdminService] },
  { path: 'profile', component: ProfileComponent,canActivate:[RouteguardService] },
  { path: 'supplier', component: SupplierComponent,canActivate:[RouteguardService,AdminService] },
  { path: '**', component: ErrorComponent }
]


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
