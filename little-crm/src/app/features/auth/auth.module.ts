import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './views/login-page/login-page.component';
import {MaterialModule} from "../../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
