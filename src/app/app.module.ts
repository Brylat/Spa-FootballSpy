import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { AfterLoginModule } from './after-login/after-login.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './shared/auth/auth.guard';
import { FirebaseService } from './shared/firebase.service';
import { FootballDataService } from './shared/football-data.service';
import { LoadingBarInterceptorService } from './shared/loading-bar/loading-bar-interceptor.service';
import { LoadingBarService } from './shared/loading-bar/loading-bar.service';
import { MaterialModule } from './shared/material.module';
import { SnackBarService } from './shared/snack-bar.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    // ANGULAR AND MATERIAL MODULES
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,

    // FIREBASE
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,

    // APP MODULES
    AppRoutingModule,
    AuthModule,
    AfterLoginModule
  ],
  providers: [
    FootballDataService,
    SnackBarService,
    AuthGuard,
    FirebaseService,
    LoadingBarService,
    [{ provide: HTTP_INTERCEPTORS, useClass: LoadingBarInterceptorService, multi: true }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
