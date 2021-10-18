import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import {MaterialModule} from "./material/material.module";
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    BrowserAnimationsModule,

    // Core Modules
    MaterialModule,

    // Feature Module

    // Basic Routing
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
