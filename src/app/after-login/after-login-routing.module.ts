import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfterLoginComponent } from './after-login.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { AuthGuard } from '../shared/auth/auth.guard';
import { LeagueDetailsComponent } from './league-details/league-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: AfterLoginComponent, canActivate: [AuthGuard], children: [
      { path: 'leagues', component: LeaguesComponent },
      { path: 'league/:id', component: LeagueDetailsComponent },
      { path: '', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfterLoginRoutingModule {
}
