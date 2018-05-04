import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FootballDataService } from './football-data.service';
import {MatTabsModule} from '@angular/material/tabs';
import { ApiTestComponent } from './api-test/api-test.component';
import { FormControl } from '@angular/forms';
import { LeaguesComponent } from './leagues/leagues.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ApiTestComponent,
    LeaguesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,
    NoopAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule
  ],
  providers: [FootballDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
