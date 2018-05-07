import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfterLoginComponent } from './after-login.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { LeagueDetailsComponent } from './league-details/league-details.component';

const routes: Routes = [
  {
    path: '', component: AfterLoginComponent, children: [
      { path: 'leagues', component: LeaguesComponent },
      { path: 'league/:id', component: LeagueDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfterLoginRoutingModule {
}
