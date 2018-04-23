import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FootballDataService } from './football-data.service';
import { ApiTestComponent } from './api-test/api-test.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ApiTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [FootballDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
