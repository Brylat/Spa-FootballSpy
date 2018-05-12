import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../../shared/football-data.service';
import {FormControl } from '@angular/forms';
import { Match } from '../../shared/objects-template/match';

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
  constructor(private footballDataService: FootballDataService) { }


  public ChangeSelectedCountry(value) {
    this.footballDataService.GetLeaguesByCountryId(value._id).subscribe(data => {
      this.Leagues = data.docs;
    });
  }
  public ChangeSelectedLeague(value) {
    this.footballDataService.GetAllSeasonsByLeagueId(value._id).subscribe(seasons => {
      this.footballDataService.GetUpcomingBySeasonId(seasons.docs[seasons.docs.length - 1]._id).subscribe(data => {
        this.Matches = data.docs;
      });
    });
  }

  ngOnInit() {
    this.footballDataService.GetAllCountry().subscribe(data => {
      this.AllCountries = data.docs;
    });
  }

}
