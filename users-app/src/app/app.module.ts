import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { LoginComponent } from './authorization/login/login.component';
import { ForgotPasswordComponent } from './authorization/forgot-password/forgot-password.component';
import { UserComponent } from './user/user.component';
import { ShowProfileComponent } from './user/show-profile/show-profile.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    ReactiveFormsComponent,
    LoginComponent,
    ForgotPasswordComponent,
    UserComponent,
    ShowProfileComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
