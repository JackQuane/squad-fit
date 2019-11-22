import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page/page.component'; 
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers';


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: PageComponent, data: {page: 'home'}},
  {path: 'about', component: PageComponent, data: {page: 'about'}},
  {path: 'contact', component: PageComponent, data: {page: 'contact'}, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
