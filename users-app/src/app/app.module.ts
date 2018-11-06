import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { LoginComponent } from './authorization/login/login.component';
import { ForgotPasswordComponent } from './authorization/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    ReactiveFormsComponent,
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
