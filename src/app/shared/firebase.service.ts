import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

@Injectable()
export class FirebaseService {

  constructor() { }

  public AddTeamId(id: number): void {
    alert(id);
  }

  public AddLeagueId(id: number): void {
    alert(id);
  }

  public DeleteTeamId(id: number): void {
    alert(id);
  }

  public DeleteLeagueId(id: number): void {
    alert(id);
  }

  public GetTeamsId() {
    return of([1, 2]);
  }

  public GetLeaguesId() {
    return of([123, 12]);
  }

}
