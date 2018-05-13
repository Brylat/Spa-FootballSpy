import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { SnackBarService } from '../../shared/snack-bar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _afAuth: AngularFireAuth,
    private _sb: SnackBarService,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  loginWithGoogleAccount() {
    this._afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => this._loginSuccess());
  }

  login() {
    this._afAuth.auth.signInWithEmailAndPassword(this.loginForm.get('email').value, this.loginForm.get('password').value)
      .then(() => this._loginSuccess())
      .catch(() => {
        this._sb.warning();
      });
  }

  private _loginSuccess(): void {
    this._sb.open('Logged in');
    this._router.navigateByUrl('/').then();
  }

}
