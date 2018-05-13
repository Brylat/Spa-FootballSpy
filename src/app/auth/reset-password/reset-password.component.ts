import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Location } from '@angular/common';

import { SnackBarService } from '../../shared/snack-bar.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent implements OnInit {
  formGroup: FormGroup;
  buttonDisabled = false;
  private emailValidators = [Validators.required, Validators.email];

  constructor(private fb: FormBuilder, private _sb: SnackBarService, private _location: Location, private afAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      email: ['', this.emailValidators]
    });
  }

  resetPasswordInit() {
    this.buttonDisabled = true;
    this.afAuth.auth.sendPasswordResetEmail(this.formGroup.get('email').value)
      .then(() => {
        this._sb.open('Account created', { duration: 5000 });
        this._location.back();
      })
      .catch(e => {
        this._sb.warning();
        console.log(e, 'error ;) ');
        this.buttonDisabled = false;
      });

  }
}
