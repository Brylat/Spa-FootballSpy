import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { FootballDataService } from './shared/football-data.service';
import { MaterialModule } from './shared/material.module';
import { SnackBarService } from './shared/snack-bar.service';
import { AfterLoginModule } from './after-login/after-login.module';
import { AuthGuard } from './shared/auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // ANGULAR AND MATERIAL MODULES
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,

    // FIREBASE
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,

    // APP MODULES
    AppRoutingModule,
    AuthModule,
    AfterLoginModule
  ],
  providers: [
    FootballDataService,
    SnackBarService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
