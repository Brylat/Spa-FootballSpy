import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../shared/firebase.service';
import { FootballDataService } from '../../shared/football-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  today = Date.now();
  columnsToDisplay = ['number', 'name'];
  public matchInfo;

  constructor(private firebaseService: FirebaseService,
    private footballDataService: FootballDataService) { }


  ngOnInit() {
    this.getMatchInfo();
  }

  private getMatchInfo(){
    this.footballDataService.GetUpcomingByDate(, this.today).subscribe(data => {
      // this.playersInfo = new MatTableDataSource(data.docs);
    });
  }


}
