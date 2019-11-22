import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { ContentService } from './shared/services/content.service';
import { fakeBackendProvider } from './_helpers';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    LoginComponent
  ],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ContentService,
    fakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
