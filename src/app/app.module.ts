import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { ContentService } from './shared/services/content.service';
import { NewUserComponent } from './new-user/new-user.component';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {MatSelectModule} from '@angular/material/select';




import { RouterModule } from '@angular/router';
// import { rootRouterConfig } from './app.routes';
// import { EditUserComponent } from './edit-user/edit-user.component';
// import { EditUserResolver } from './edit-user/edit-user.resolver';
// import { HomeComponent } from './home/home.component';
import { FirebaseService } from './shared/services/firebase.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    NewUserComponent,
    AvatarDialogComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,  
    // RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    FormsModule,
    MatDialogModule,
    MatInputModule,
    AngularFireAuthModule,
    MatSelectModule
  ],
  providers: [FirebaseService, ContentService, AuthService, UserService, UserResolver, AuthGuard, AngularFireAuthGuard],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
