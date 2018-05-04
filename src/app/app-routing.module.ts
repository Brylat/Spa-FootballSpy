import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaguesComponent } from './leagues/leagues.component';
import { LeagueDetailsComponent } from './league-details/league-details.component';

const routes: Routes = [
  { path: 'leagues', component: LeaguesComponent },
  { path: 'league/:id', component: LeagueDetailsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
