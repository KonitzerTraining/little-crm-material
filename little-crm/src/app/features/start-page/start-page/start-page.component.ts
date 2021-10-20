import { Component, OnInit } from '@angular/core';
import {fromEvent, interval, Observable, of, timer} from "rxjs"; // create Observables
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {createHttpObservable} from "../utils"; // for pipe

@Component({
  selector: 'crm-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  public noViPCustomers: any;
  public vipCustomers: any;

  constructor() { }

  ngOnInit(): void {

/*    setInterval(() => {
      console.log('ok')
    }, 1000)*/
/*
    const interval$ = interval(1000);
    interval$.subscribe(console.log)
*/

/*
    const timer$ = timer(3000, 1000);
    const sub = timer$.subscribe(console.log);

    setTimeout(() => {
      sub.unsubscribe();
    }, 5000)

    const click$ = fromEvent(document, 'click');
    click$.subscribe((payload) => {
      console.log(payload);
    })

    const of$ = of(1,4,5,6,23);
    of$.subscribe((v) => {
      console.log(v);
    })
*/

    const values1$ = of(3,54,634);
    values1$
      .pipe(
        map(value => value * 100)
      )
      .subscribe(console.log)

    const http$ = createHttpObservable(environment.apiUrl + 'customers');

    http$
      .pipe(
        map((data: any) => {
          data.map((item: any) => {
            item.tstamp = (new Date).getMilliseconds();
          })
          return data;
        })
      )
      .subscribe(
        (customers) => {
          this.vipCustomers = customers.filter((customer: any) => {
           //  retrurn customer.catagory === 'VIP';
            return true;
          });
          this.noViPCustomers = customers.filter();
        },
        (err) => {
          console.warn(err);
        },
        () => {
          console.log('completed')
        }
      );
  }

}
