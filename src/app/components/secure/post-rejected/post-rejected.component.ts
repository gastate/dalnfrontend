import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from '../../../services/auth.service';
import { PostService } from '../../../services/post.service';
import { UserLoginService } from '../../../services/user-login.service';
import { CognitoUtil } from '../../../services/cognito.service';
import { LoggedInCallback } from '../../../services/cognito.service';

import { Post } from '../../../model/post-model';

import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-post-rejected',
  templateUrl: './post-rejected.component.html',
  styleUrls: ['./post-rejected.component.css']
})
export class PostRejectedComponent implements OnInit, LoggedInCallback {
    rejected_list: Post[] = [];
    errorMessage: string;
    attemptsMessage: string;
    postPoolTitle: string;

    loading: boolean = false;
    failed: boolean = false;

    MAX_ATTEMPTS: number = 3;
    attempt: number = 0;

  constructor(
    public authService: AuthService,
    public cognitoService: CognitoUtil,
    public postService: PostService,
    public userService: UserLoginService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getRejectedPosts();
    this.errorMessage = null;
    this.attemptsMessage = null;
  }

  getRejectedPosts() {
    this.loading = true;
    this.postPoolTitle = "Admins Post Pool";

    this.postService.getRejectedPosts().subscribe(
        (data) => {
            this.rejected_list = data;
            this.attemptsMessage = null;
            if (this.rejected_list.length == 0) {
                this.errorMessage = "No posts were rejected.";
            }
            this.loading = false;
        },
        err => {
            this.errorMessage = err;
            this.loading = false;
            this.failed = true;

            while (this.attempt < this.MAX_ATTEMPTS) {
                setTimeout(() => this.getRejectedPosts(), 8000);
                this.attemptsMessage = "Trying to refresh every 8 seconds...attempt " + this.attempt + " of 3";
                this.attempt++;
            }
        });
}

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn) {
        console.log("Not logged in, returning to login page.");
        this.router.navigate(['/login']);
    }
}
}
