import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../shared/material.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { PasswordsFormGroupComponent } from './shared/passwords-form-group/passwords-form-group.component';
import { AuthComponent } from './auth.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,

    AuthRoutingModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    PasswordsFormGroupComponent,
    AuthComponent,
    ResetPasswordComponent
  ]
})
export class AuthModule {
}
