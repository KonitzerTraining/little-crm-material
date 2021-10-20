import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {tap} from "rxjs/operators";
import {User} from "../../model/user";
import {noop} from "rxjs";
import {AuthActions} from "../../store/actions/action-types";

@Component({
  selector: 'crm-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store) {

    this.form = fb.group({
      email: ['test-user', [Validators.required]],
      password: ['test-password', [Validators.required]]
    });
  }

  login() {
    const {email, password} = this.form.value;
    this.auth.login(email, password)
      .pipe(
        tap((user: User) => {
          this.store.dispatch(AuthActions.login({user}))
        })
      )
      .subscribe(
        noop,
        (err) => {
          console.warn(err);
        },
        () => {
          console.log("complete");
        }
      )

  }
}
