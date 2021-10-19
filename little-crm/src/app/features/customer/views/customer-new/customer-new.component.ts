import { Component } from '@angular/core';
import {noop, Observable} from 'rxjs';
import {QuestionBase} from '../../model/question-base';
import {QuestionService} from '../../services/question.service';
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../model/customer";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";

@Component({
  selector: 'crm-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss']
})
export class CustomerNewComponent  {

  questions$: Observable<QuestionBase<any>[]>;

  constructor(
    service: QuestionService,
    private customerService: CustomerService,
    private router: Router) {
    this.questions$ = service.getQuestions();
  }

  createCustomer(customer: Customer) {
    this.customerService.postCustomer(customer)
      .pipe(
        tap(() => {
          this.router.navigateByUrl('/customer-dashboard')
        })
      ).subscribe(noop)
      /*.subscribe(() => {
        this.router.navigateByUrl('/customer-dashboard')
      })*/
  }
}
