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
    this.firebaseService.deleteLeague(league.league.key);
    this.ObserveLeagues = this.ObserveLeagues.filter(x => x.leagueId !== league.leagueId);
    event.stopPropagation();
  }

  public DeleteTeam(event, team) {
    this.firebaseService.deleteTeam(team.team.key);
    this.ObserveTeams = this.ObserveTeams.filter(x => x._id !== team._id);
    event.stopPropagation();
  }

  private GetData() {
    this.firebaseService.getTeams().subscribe(teams => {
      teams.forEach(team => {
        this.footballDataService.GetTeamSeasonById(team.value).subscribe(data => {
          this.ObserveTeams.push({
            data: data.docs[0],
            team: team});
        });
      });
    });

    this.firebaseService.getLeagues().subscribe(leagues => {
      leagues.forEach(league => {
        this.footballDataService.GetAllSeasonsByLeagueId(league.value).subscribe(seasons => {
          this.footballDataService.GetAllStagesBySeasonId(seasons.docs[seasons.docs.length - 1]._id).subscribe(data => {
            this.ObserveLeagues.push({
              data: data.docs[0],
              league: league});
          });
        });
      });
    });
  }
}
