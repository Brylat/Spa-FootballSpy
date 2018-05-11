import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../../shared/football-data.service';
import {FormControl } from '@angular/forms';
import { Match } from '../../shared/objects-template/match';

@Component({
  selector: 'app-team-compare',
  templateUrl: './team-compare.component.html',
  styleUrls: ['./team-compare.component.css']
})
export class TeamCompareComponent implements OnInit {
  public AllCountries = [];
  public Leagues1 = [];
  public Leagues2 = [];
  public Teams1 = [];
  public Teams2 = [];
  public MatchHistory: Match[] = [];
  public Countries1 = new FormControl('');
  public Countries2 = new FormControl('');
  public League1 = new FormControl('');
  public League2 = new FormControl('');
  public Team1 = new FormControl('');
  public Team2 = new FormControl('');
  constructor(private footballDataService: FootballDataService) { }

  public ChangeSelectedCountry1(value) {
    this.footballDataService.GetLeaguesByCountryId(value._id).subscribe(data => {
      this.Leagues1 = data.docs;
    });
  }
  public ChangeSelectedLeague1(value) {
    this.footballDataService.GetAllSeasonsByLeagueId(value._id).subscribe(seasons => {
      this.footballDataService.GetAllStagesBySeasonId(seasons.docs[seasons.docs.length - 1]._id).subscribe(teams => {
        this.Teams1 = teams.docs[0].standing;
      });
    });
  }
  public ChangeSelectedCountry2(value) {
    this.footballDataService.GetLeaguesByCountryId(value._id).subscribe(data => {
      this.Leagues2 = data.docs;
    });
  }
  public ChangeSelectedLeague2(value) {
    this.footballDataService.GetAllSeasonsByLeagueId(value._id).subscribe(seasons => {
      this.footballDataService.GetAllStagesBySeasonId(seasons.docs[seasons.docs.length - 1]._id).subscribe(teams => {
        this.Teams2 = teams.docs[0].standing;
      });
    });
  }
  public ChangeSelectedTeam1(value) {
    if (this.Team2.value) {
      this.GetMatchHistory(value.id_team_season, this.Team2.value.id_team_season);
    }
  }
  public ChangeSelectedTeam2(value) {
    if (this.Team1.value) {
      this.GetMatchHistory(value.id_team_season, this.Team1.value.id_team_season);
    }
  }
  private GetMatchHistory(id1: number, id2: number) {
    this.footballDataService.GetTeamSeasonById(id1).subscribe(teamSeason1 => {
      this.footballDataService.GetTeamSeasonById(id2).subscribe(teamSeason2 => {
        this.footballDataService.GetMatchBetweenTeamsByTeamId(teamSeason1.docs[0].id_team, teamSeason2.docs[0].id_team).subscribe(data => {
          this.MatchHistory = data.docs;
        });
      });
    });
  }

  ngOnInit() {
    this.footballDataService.GetAllCountry().subscribe(data => {
      this.AllCountries = data.docs;
    });
  }



}
