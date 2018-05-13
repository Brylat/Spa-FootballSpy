import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../../shared/football-data.service';
import {FormControl } from '@angular/forms';
import { Match } from '../../shared/objects-template/match';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-upcoming-matches',
  templateUrl: './upcoming-matches.component.html',
  styleUrls: ['./upcoming-matches.component.css']
})
export class UpcomingMatchesComponent implements OnInit {
  public AllCountries = [];
  public Leagues = [];
  public Matches = [];
  public Countries = new FormControl('');
  public League = new FormControl('');

  public dataSource;
  public displayedColumns = ['schedule_date', 'stadium', 'team_season_home_name', 'team_season_away_name'];


  constructor(private footballDataService: FootballDataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  public ChangeSelectedCountry(value) {
    this.footballDataService.GetLeaguesByCountryId(value._id).subscribe(data => {
      this.Leagues = data.docs;
    });
  }
  public ChangeSelectedLeague(value) {
    this.footballDataService.GetAllSeasonsByLeagueId(value._id).subscribe(seasons => {
      this.footballDataService.GetUpcomingBySeasonId(seasons.docs[seasons.docs.length - 1]._id).subscribe(data => {
        this.Matches = data.docs;
        this.dataSource = new MatTableDataSource(data.docs);
      });
    });
  }
  public ClickedRow(row) {
    this.router.navigate(['/teamcompare'], {queryParams: {id1: row.id_team_season_away, id2: row.id_team_season_home}});
  }
  ngOnInit() {
    this.footballDataService.GetAllCountry().subscribe(data => {
      this.AllCountries = data.docs;
    });
  }

}
