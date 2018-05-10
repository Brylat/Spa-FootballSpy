import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../../shared/football-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Stand } from '../../shared/objects-template/stand';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public teamInfo;
  public playersInfo;
  public teamStats: Stand;
  columnsToDisplay = ['number', 'name'];
  panelOpenState = false;

  constructor(private footballDataService: FootballDataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.GetTeamInfo();
  }

  private GetTeamInfo(): void {
    const teamId = +this.route.snapshot.paramMap.get('teamId');
    this.GetTeamById(teamId);
    this.GetPlayersById(teamId);
  }

  private GetTeamById(teamId: number) {
    this.footballDataService.GetTeamSeasonById(teamId).subscribe( data => {
      this.teamInfo = data.docs[0];
      this.GetTeamStats(data.docs[0].id_season, data.docs[0].id_team);
    });
  }

  private GetPlayersById(teamId: number) {
    this.footballDataService.GetTeamSeasonPlayersByTeamSeasonId(teamId).subscribe ( data => {
      this.playersInfo = new MatTableDataSource(data.docs);
    });
  }

  private GetTeamStats(seasonId: number, teamId: number) {
    this.footballDataService.GetAllStagesBySeasonId(seasonId).subscribe(data => {
      this.teamStats = data.docs[0].standing.filter(x => x.id_team_season === teamId)[0];
    });
  }
}
