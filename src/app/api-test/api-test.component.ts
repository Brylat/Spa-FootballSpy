import { Component, OnInit } from '@angular/core';

import { FootballDataService } from '../football-data.service';
import { AccessToken } from '../objects-template/access-token';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {
  public toShow: string;
  constructor(private footballDataService: FootballDataService) {
    // let tmp: AccessToken;
    this.toShow = '';
    footballDataService.getAccesKey().subscribe(x => {
      this.toShow += x.new_access_token;
    });
    // footballDataService.GetMatchBetweenTeamsByTeamId(110, 90).subscribe(data => {
    //   this.toShow += JSON.stringify(data);
    // });
    footballDataService.GetStageById(40).subscribe(data => {
        this.toShow += JSON.stringify(data);
      });

  }

  ngOnInit() {
  }

}
