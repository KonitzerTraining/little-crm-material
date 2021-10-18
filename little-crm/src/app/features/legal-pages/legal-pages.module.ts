import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LegalNoticePageComponent} from "./legal-notice-page/legal-notice-page.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    LegalNoticePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: LegalNoticePageComponent
      }
    ])
  ]
})
export class LegalPagesModule { }
