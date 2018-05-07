import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterLoginRoutingModule } from './after-login-routing.module';
import { MaterialModule } from '../shared/material.module';
import { AfterLoginComponent } from './after-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { ApiTestComponent } from '../api-test/api-test.component';
import { LeagueDetailsComponent } from './league-details/league-details.component';
import { LeaguesComponent } from './leagues/leagues.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,

    AfterLoginRoutingModule,
  ],
  declarations: [
    AfterLoginComponent,

    NavbarComponent,
    ApiTestComponent,
    LeaguesComponent,
    LeagueDetailsComponent,
  ]
})
export class AfterLoginModule {
}
