import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent, data: { title: 'Sign In'} },
  { path: 'signup', component: SignupComponent, data: {title: 'Sign Up'} },
  { path: 'reset-password', component: ResetPasswordComponent, data: { title: 'Reset Password' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [SigninComponent, SignupComponent, ResetPasswordComponent]
})
export class AuthModule { }
