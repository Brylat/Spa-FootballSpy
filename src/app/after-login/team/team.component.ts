import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../../shared/football-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Stand } from '../../shared/objects-template/stand';
import { Chart } from 'chart.js';
import { FirebaseService } from '../../shared/firebase.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {
  public teamInfo;
  public playersInfo;
  public teamStats: Stand;
  private TeamId;
  columnsToDisplay = ['number', 'name'];
  columnsToDisplay2 = ['home', 'away'];
  panelOpenState = false;
  chart: Chart;

  constructor(private footballDataService: FootballDataService,
    private route: ActivatedRoute,
    private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.GetTeamInfo();
  }

  public AddTeam() {
    this.firebaseService.AddTeamId(this.TeamId);
  }
  private GetTeamInfo(): void {
    this.TeamId = +this.route.snapshot.paramMap.get('teamId');
    this.GetTeamById(this.TeamId);
    this.GetPlayersById(this.TeamId);
  }

  private GetTeamById(teamId: number) {
    this.footballDataService.GetTeamSeasonById(teamId).subscribe(data => {
      this.teamInfo = data.docs[0];
      this.GetTeamStats(data.docs[0].id_season, data.docs[0]._id);
    });
  }

  private GetPlayersById(teamId: number) {
    this.footballDataService.GetTeamSeasonPlayersByTeamSeasonId(teamId).subscribe(data => {
      this.playersInfo = new MatTableDataSource(data.docs);
    });
  }

  private GetTeamStats(seasonId: number, teamId: number) {
    this.footballDataService.GetAllStagesBySeasonId(seasonId).subscribe(data => {
      this.teamStats = data.docs[0].standing.filter(x => x.id_team_season === teamId)[0];

      this.chart = new Chart('canvas', {
        type: 'doughnut',
        data: {
          labels: ['Wins', 'Draws', 'Loses'],
          datasets: [{
            data: [this.teamStats.w_tot, this.teamStats.d_tot, this.teamStats.l_tot],
            backgroundColor: ['#00ff00', '#ff0000', '#ffff00']
          }],
        }
      });
    });
  }

}
