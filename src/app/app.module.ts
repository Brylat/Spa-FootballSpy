import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FootballDataService } from './football-data.service';
import { ApiTestComponent } from './api-test/api-test.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { LeagueDetailsComponent } from './league-details/league-details.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ApiTestComponent,
    LeaguesComponent,
    LeagueDetailsComponent,
  ],
  imports: [
    BrowserModule,

    // FIREBASE
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,

    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [FootballDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
