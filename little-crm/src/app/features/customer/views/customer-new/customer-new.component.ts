import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {QuestionBase} from '../../model/question-base';
import {QuestionService} from '../../services/question.service';

@Component({
  selector: 'crm-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss']
})
export class CustomerNewComponent  {

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
