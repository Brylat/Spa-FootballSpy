import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaguesComponent } from './after-login/leagues/leagues.component';
import { LeagueDetailsComponent } from './after-login/league-details/league-details.component';
import { AuthGuardService } from './shared/auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  // { path: 'leagues', component: LeaguesComponent, canActivate: [AuthGuardService] },
  // { path: 'league/:id', component: LeagueDetailsComponent },
  // { path: 'login', component: LoginComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
