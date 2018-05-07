import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from '../../shared/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private afAuth: AngularFireAuth, private fb: FormBuilder, private sb: SnackBarService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  login(): void {
    this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.get('email').value, this.loginForm.get('password').value)
      .then(() => this.sb.open('Pomyślnie zalogowano'))
      .catch(() => this.sb.warning());
  }

  test() {
    this.afAuth.authState.subscribe(d => console.log(d, 'status'));
  }

}
