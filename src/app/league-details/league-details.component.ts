import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FootballDataService } from '../football-data.service';

@Component({
  selector: 'app-league-details',
  templateUrl: './league-details.component.html',
  styleUrls: ['./league-details.component.css']
})
export class LeagueDetailsComponent implements OnInit {
  public Teams = [];
  constructor(private footballDataService: FootballDataService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.GetLeagueInfo();
  }

  private GetLeagueInfo(): void {
    const leagueId = +this.route.snapshot.paramMap.get('id');
    this.GetTeamsByLeagueId(leagueId);
  }

  private GetTeamsByLeagueId(leagueId: number) {
    this.footballDataService.GetAllSeasonsByLeagueId(leagueId).subscribe(seasons => {
      this.footballDataService.GetAllStagesBySeasonId(seasons.docs[seasons.docs.length - 1]._id).subscribe(teams => {
        this.Teams = teams.docs[0].standing;
      });
    });
  }
}
