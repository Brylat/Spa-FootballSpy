import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../../shared/football-data.service';
import { SimpleCountry } from '../../shared/objects-template/simple-country';

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
    if (country._id === 82 ) { return; }
    this.footballDataService.GetLeaguesByCountryId(country._id).subscribe(data => {
      this.CountriesWithLeagues.push({
        countryInfo: country,
        leagues: data.docs
      });
    });
  }

  ngOnInit() {
    this.footballDataService.GetAllCountry().subscribe(data => {
      data.docs.forEach(element => {
        this.GetLeagueForCountry(element);
      });
    });
  }

}
