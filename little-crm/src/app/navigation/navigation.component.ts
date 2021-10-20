import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AuthActions} from "../features/auth/store/actions/action-types";
import {AuthSelectors} from "../features/auth/store/selectors/auth-selectors-types";
import {Observable} from "rxjs";

@Component({
  selector: 'crm-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public isLoggedIn$ ?: Observable<boolean>;
  public isLoggedOut$ ?: Observable<boolean>;

  constructor(
    private store: Store
  ) { }

    ngOnInit(): void {
        this.isLoggedIn$ = this.store.pipe(
          select(AuthSelectors.isLoggedIn)
        );

       this.isLoggedOut$ = this.store.pipe(
        select(AuthSelectors.isLoggedOut)
      );
    }

    logout() {
        this.store.dispatch(AuthActions.logout())
    }
}
