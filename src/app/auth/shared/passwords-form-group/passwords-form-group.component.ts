import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-passwords-form-group',
  templateUrl: './passwords-form-group.component.html',
})
export class PasswordsFormGroupComponent implements OnInit {
  @Output() passwordsFormEmitter = new EventEmitter<FormGroup>();
  passwordsFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.passwordsFormGroup = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required, matchOtherControls()]]
    });

    this.passwordsFormGroup.get('password').valueChanges.subscribe(() => this.passwordsFormGroup.get('password2').updateValueAndValidity());

    this.passwordsFormEmitter.emit(this.passwordsFormGroup);
  }
}

export function matchOtherControls(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (!control || !control.parent || !control.parent.controls) {
      return null;
    }

    let lastValue: string;
    for (const name of Object.keys(control.parent.controls)) {
      const value = control.parent.controls[name].value;
      if (lastValue !== undefined && value !== lastValue) {
        return {
          mathOther: true
        };
      }
      lastValue = value;
    }
    return null;
  };
}
