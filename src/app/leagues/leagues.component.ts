import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../football-data.service';
import { SimpleCountry } from '../objects-template/simple-country';
import { League } from '../objects-template/league';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  public CountriesWithLeagues = [];
  constructor(private footballDataService: FootballDataService) {
  }

  private GetLeagueForCountry(country: SimpleCountry) {
    this.footballDataService.GetLeaguesByCountryId(country._id).subscribe(data => {
      this.CountriesWithLeagues.push({
        countryInfo: country,
        leagues: data.docs
      });
      data.docs.forEach(league => {
        this.GetTeamsByLeagueId(league._id, country._id);
      });
    });
  }

    private GetTeamsByLeagueId(leagueId: number, countryId) {
      this.footballDataService.GetAllSeasonsByLeagueId(leagueId).subscribe(seasons => {
        this.footballDataService.GetTeamSeasonById(seasons.docs[seasons.docs.length - 1]._id).subscribe(teams => {
          const foundCountryIndex = this.CountriesWithLeagues.findIndex(x => x.countryInfo._id === countryId);
          const foundLeagueIndex = this.CountriesWithLeagues[foundCountryIndex].leagues.findIndex(x => x._id === leagueId);
          this.CountriesWithLeagues[foundCountryIndex].leagues[foundLeagueIndex].teams = teams.docs;
        });
      });
    }

    public LeagueInfo(league) {
      alert(league.name);
    }

  ngOnInit() {
    this.footballDataService.GetAllCountry().subscribe(data => {
      data.docs.forEach(element => {
        this.GetLeagueForCountry(element);
      });
    });
  }

}
