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
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {path : 'login', component: LoginComponent},
    {path : 'page', component: PageComponent},
    {path : 'register', component: RegisterComponent},
    {path : 'about', component: AboutComponent},
    {path : 'contact', component: ContactComponent},
    {path : 'show/category/:id/products', component: ProductComponent},
    {path : 'show/all/products', component: ProductComponent},
    {path : 'logout', component: LogoutComponent},
    {path : 'user', component: UserComponent},
    {path : '**', component: ErrorComponent}
]


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
