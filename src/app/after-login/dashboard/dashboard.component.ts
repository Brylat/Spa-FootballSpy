import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../shared/firebase.service';
import { FootballDataService } from '../../shared/football-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private firebaseService: FirebaseService,
    private footballDataService: FootballDataService) { }


  ngOnInit() {
  }

}
