import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) {
  }

  ngOnInit() {
  }

  test() {
    this.afAuth.authState.subscribe(d => console.log(d, 'status'));
    this.afAuth.auth.sendPasswordResetEmail('adrian.scehura@gmail.com')
  }

}
