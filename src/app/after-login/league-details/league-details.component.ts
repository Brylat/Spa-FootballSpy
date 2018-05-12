import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material';

import { FootballDataService } from '../../shared/football-data.service';
import { FirebaseService } from '../../shared/firebase.service';

@Component({
  selector: 'app-league-details',
  templateUrl: './league-details.component.html',
  styleUrls: ['./league-details.component.css']
})
export class LeagueDetailsComponent implements OnInit {
  public dataSource;
  public displayedColumns = ['position', 'name', 'matchs', 'win', 'draw', 'lose', 'points'];
  public LeagueName;
  private LeagueId;

  constructor(private footballDataService: FootballDataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.GetLeagueInfo();
  }

  public AddLeague() {
    this.firebaseService.addLeague(this.LeagueId);
  }

  public ClickedRow(row) {
    this.router.navigate(['/team/' + row.id_team_season]);
  }

  private GetLeagueInfo(): void {
    this.LeagueId = +this.route.snapshot.paramMap.get('id');
    this.GetTeamsByLeagueId(this.LeagueId);
  }

  private GetTeamsByLeagueId(leagueId: number) {
    this.footballDataService.GetAllSeasonsByLeagueId(leagueId).subscribe(seasons => {
      this.footballDataService.GetAllStagesBySeasonId(seasons.docs[seasons.docs.length - 1]._id).subscribe(teams => {
        this.LeagueName = teams.docs[0].name;
        this.dataSource = new MatTableDataSource(teams.docs[0].standing);
      });
    });
  }
}
