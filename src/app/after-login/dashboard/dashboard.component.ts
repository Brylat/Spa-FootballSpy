import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../shared/firebase.service';
import { FootballDataService } from '../../shared/football-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public ObserveTeams = [];
  public ObserveLeagues = [];

  constructor(private firebaseService: FirebaseService,
              private footballDataService: FootballDataService) { }


  ngOnInit() {
    this.GetData();
  }

  public DeleteLeague(event, league) {
    this.firebaseService.DeleteLeagueId(league.leagueId);
    this.ObserveLeagues = this.ObserveLeagues.filter(x => x.leagueId !== league.leagueId);
    event.stopPropagation();
  }

  public DeleteTeam(event, team) {
    this.firebaseService.DeleteTeamId(team._id);
    this.ObserveTeams = this.ObserveTeams.filter(x => x._id !== team._id);
    event.stopPropagation();
  }

  private GetData() {
    this.firebaseService.GetTeamsId().subscribe(teams => {
      teams.forEach(team => {
        this.footballDataService.GetTeamSeasonById(team).subscribe(data => {
          this.ObserveTeams.push(data.docs[0]);
        });
      });
    });

    this.firebaseService.GetLeaguesId().subscribe(leagues => {
      leagues.forEach(league => {
        this.footballDataService.GetAllSeasonsByLeagueId(league).subscribe(seasons => {
          this.footballDataService.GetAllStagesBySeasonId(seasons.docs[seasons.docs.length - 1]._id).subscribe(data => {
            this.ObserveLeagues.push({
              data: data.docs[0],
              leagueId: league});
          });
        });
      });
    });
  }
}
