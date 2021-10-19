import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import {QuestionBase} from '../model/question-base';
import {DropdownQuestion} from '../model/question-dropdown';
import {TextboxQuestion} from '../model/question-textbox';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [

/*      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),*/

      new TextboxQuestion({
        key: 'name',
        label: 'Name',
        value: '',
        type: 'text',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'volume',
        label: 'Volume',
        type: 'number',
        order: 2
      })

    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
