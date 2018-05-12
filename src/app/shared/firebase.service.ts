import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList, SnapshotAction } from 'angularfire2/database/interfaces';

@Injectable()
export class FirebaseService {
  private _teamsRef;
  private _leagueRef;

  constructor(private _afAuth: AngularFireAuth, private _db: AngularFireDatabase) {
    this._afAuth.authState.subscribe(user => {
      if (user) {
        this._leagueRef = this._db.list('users/' + user.uid + '/leagues');
        this._teamsRef = this._db.list('users/' + user.uid + '/teams');
      }
    });
  }

  public addTeam(id: number): void {
    this.getTeams().subscribe((arr: any[]) => {
      if (!arr.find(el => el.value.toString() === id.toString())) {
        this._teamsRef.push(id);
      }
    });
  }

  public addLeague(id: number): void {
    this.getLeagues().subscribe((arr: any[]) => {
      if (!arr.find(el => el.value.toString() === id.toString())) {
        this._leagueRef.push(id);
      }
    });
  }

  public deleteTeam(id: string): void {
    this._teamsRef.remove(id);
  }

  public deleteLeague(id: string): void {
    this._leagueRef.remove(id);
  }

  public getTeams() {
    return this.getDate(this._teamsRef);
  }

  public getLeagues() {
    return this.getDate(this._leagueRef);
  }

  private getDate(ref) {
    return ref.snapshotChanges().first()
      .map((arr: SnapshotAction[]) => {
        return arr.map(el => {
          return {
            key: el.payload.key,
            value: el.payload.val()
          };
        });
      });
  }

}
