import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import {MaterialModule} from "./material/material.module";
import {StartPageModule} from "./features/start-page/start-page.module";
import {DefaultPagesModule} from "./features/default-pages/default-pages.module";
import {CustomerModule} from "./features/customer/customer.module";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Core Modules
    MaterialModule,

    // Feature Module
    StartPageModule,
    DefaultPagesModule,
    CustomerModule,

    // Basic Routing
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
