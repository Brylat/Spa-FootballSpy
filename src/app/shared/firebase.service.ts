import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

@Injectable()
export class FirebaseService {

  constructor() { }

  public AddTeamId(id: number): void {

  }

  public AddLeagueId(id: number): void {

  }

  public DeleteTeamId(id: number): void {

  }

  public DeleteLeagueId(id: number): void {

  }

  public GetTeamsId() {
    return of([]);
  }

  public GetLeaguesId() {
    return of([]);
  }

}
