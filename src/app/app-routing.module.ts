import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';

import { PageComponent } from './page/page.component'; 
import { NewUserComponent } from './new-user/new-user.component'; 
// import { LoginComponent } from './login/login.component';
// import { UserComponent } from './user/user.component';
// import { RegisterComponent } from './register/register.component';



const appRoutes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: 'home', component: PageComponent, data: {page: 'home'}},
  // {path: 'about', component: PageComponent, data: {page: 'about'}},
  // {path: 'contact', component: PageComponent, data: {page: 'contact'}},
  // {path: 'new-user', component: NewUserComponent},
  // {path: '**', redirectTo: '/home', pathMatch: 'full'}

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
