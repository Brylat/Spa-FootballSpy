import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/firebase.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private fdb: FirebaseService) { }

  ngOnInit() {
  }

  doSth(value) {
    this.fdb.addTeam(value);
  }

  addLeague(value) {
    this.fdb.addLeague(value);
  }

  deleteT(id) {
    this.fdb.deleteTeam(id);
  }

  deleteL(id) {
    this.fdb.deleteLeague(id);
  }

  getT() {
    this.fdb.getTeams().subscribe(d => console.log(d));

  }

  getL() {
    this.fdb.getLeagues().subscribe(d => console.log(d));
  }

}
