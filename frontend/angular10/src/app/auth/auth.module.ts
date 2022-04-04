import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { OtpComponent } from './otp/otp.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPassComponent,
    ChangePassComponent,
    OtpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
export const routingComponents = [ LoginComponent,RegisterComponent,ForgotPassComponent,  ChangePassComponent]