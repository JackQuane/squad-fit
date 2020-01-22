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



import { RouterModule } from '@angular/router';
// import { rootRouterConfig } from './app.routes';
// import { EditUserComponent } from './edit-user/edit-user.component';
// import { EditUserResolver } from './edit-user/edit-user.resolver';
// import { HomeComponent } from './home/home.component';
import { FirebaseService } from './shared/services/firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    NewUserComponent,
    AvatarDialogComponent
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
    MatDialogModule
  ],
  providers: [FirebaseService, ContentService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
