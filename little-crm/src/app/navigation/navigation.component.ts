import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthActions} from "../features/auth/store/actions/action-types";

@Component({
  selector: 'crm-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

    ngOnInit(): void {
    }

    logout() {
        this.store.dispatch(AuthActions.logout())
    }
}
