import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CRUDComponent } from './pages/crud/crud.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PagesComponent } from './pages/pages.component';
import { HomeModule } from './pages/home/home.module';
import { PagesModule } from './pages/pages.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CRUDComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PagesModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
