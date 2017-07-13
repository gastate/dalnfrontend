import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserLoginService} from "../../../../services/user-login.service";
import {LoggedInCallback} from "../../../../services/cognito.service";


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit, OnDestroy {

  private sub: any;
  email: string;
  errorMessage: string;

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
        this.email = params['username'];
    });

    this.errorMessage = null;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
