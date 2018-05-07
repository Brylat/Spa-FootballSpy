import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfterLoginComponent } from './after-login.component';
import { LeaguesComponent } from './leagues/leagues.component';

const routes: Routes = [
  {
    path: '', component: AfterLoginComponent, children: [
      { path: 'leagues', component: LeaguesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfterLoginRoutingModule {
}
