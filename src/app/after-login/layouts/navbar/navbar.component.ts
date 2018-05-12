import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { SnackBarService } from '../../../shared/snack-bar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _afAuth: AngularFireAuth, private _router: Router, private _sb: SnackBarService) { }

  ngOnInit() {
  }

  logout() {
    this._afAuth.auth.signOut().then(d => {
      this._router.navigateByUrl('/auth/login');
      this._sb.open('Wylogowano');
    });
  }
}
