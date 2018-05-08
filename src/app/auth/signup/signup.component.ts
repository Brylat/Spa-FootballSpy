import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from '../../shared/snack-bar.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  formGroup: FormGroup;
  private _emailValidators = [Validators.required, Validators.email];

  constructor(private _fb: FormBuilder, private _sb: SnackBarService, private _afAuth: AngularFireAuth, private _router: Router) {
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      email: ['', this._emailValidators],
    });
  }

  signup() {
    this._afAuth.auth.createUserWithEmailAndPassword(this.formGroup.get('email').value, this.formGroup.get('passwords').get('password').value)
      .then(() => this.authSuccess('Pomyślnie utworzono konto'))
      .catch(e => console.log(e));
  }

  getPasswordsFormGroup(form: FormGroup) {
    this.formGroup.addControl('passwords', form);
  }

  loginWithGoogleAccount() {
    this._afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => this.authSuccess('Zalogowano'));
  }

  private authSuccess(message: string): void {
    this._sb.open(message);
    this._router.navigateByUrl('/').then();
  }

}
