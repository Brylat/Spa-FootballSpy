import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../../shared/football-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public teamInfo;
  public playersInfo;
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
    });
  }

  private GetPlayersById(teamId: number) {
    this.footballDataService.GetTeamSeasonPlayersByTeamSeasonId(teamId).subscribe ( data => {
      this.playersInfo = new MatTableDataSource(data.docs);
    });
  }

}
