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
import { TeamComponent } from './team/team.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamCompareComponent } from './team-compare/team-compare.component';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';
import { MatchesInDateComponent } from './matches-in-date/matches-in-date.component';
import { UpcomingSiteComponent } from './upcoming-site/upcoming-site.component';

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
    TeamComponent,
    DashboardComponent,
    TeamCompareComponent,
    UpcomingMatchesComponent,
    MatchesInDateComponent,
    UpcomingSiteComponent,
  ]
})
export class AfterLoginModule {
}
