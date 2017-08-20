import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {AuthService} from '../../../services/auth.service';
import {PostService} from '../../../services/post.service';
import {UserLoginService} from '../../../services/user-login.service';
import {CognitoUtil} from '../../../services/cognito.service';
import {LoggedInCallback} from '../../../services/cognito.service';

import { Post } from '../../../model/post-model';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-post-approval',
  templateUrl: './post-approval.component.html',
  styleUrls: ['./post-approval.component.css']
})
export class PostApprovalComponent implements OnInit, LoggedInCallback {

  approval_list: Post[] = [];
  errorMessage: string;
  noAdminPostsMessage: string;
  getdev: boolean;
  postPoolTitle: string;

  loading: boolean = false;
  failed: boolean = false;

  private endPoint = environment;

  constructor(
      public authService: AuthService,
      public cognitoService: CognitoUtil,
      public postService: PostService,
      public userService: UserLoginService,
      public router: Router
  ) {
      this.userService.isAuthenticated(this);
   }

  ngOnInit() {

      // change boolean of getdev if in production or not, will affect the display of posts showing.
      if (this.endPoint.production === true) {
          this.getdev = false;
      } else {
          this.getdev = true;
      }

      this.getUnapproved();
      this.errorMessage = null;
      this.noAdminPostsMessage = null;
  }

  approveSelected(){
      this.postService.approvePosts(this.postService.selected_posts);
  }

  getUnapproved() {
      this.loading = true;
      this.postPoolTitle = "Admins Post Pool";
      if (this.postService.cache_admin_posts.length === 0) {
          this.postService.getUnapprovedPosts().subscribe(
          (data) => {
              this.approval_list = data;
              this.postService.cache_admin_posts = data;
              if(this.approval_list.length == 0) {
                  this.noAdminPostsMessage = "No posts to be reviewed!";
              }
              this.loading = false;
          },
          err => {
              this.errorMessage = err;
              this.loading = false;
              this.failed = true;
          });
      } else {
          this.approval_list = this.postService.cache_admin_posts;
          this.loading = false;
      }

  }

  getUserPostPool() {
      this.approval_list = [];
      this.errorMessage = null;
      this.noAdminPostsMessage = null;
      this.postPoolTitle = "Your Post Pool";
      this.loading = true;
    //   console.log(this.cognitoService.getCurrentUser());
  }

  approvePost(postId : string) {
      this.authService.adminApprovePost(postId);
      console.log("Approve post fired");
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
      if(!isLoggedIn) {
          console.log("Not logged in, returning to login page.");
          this.router.navigate(['/login']);
      }
  }


}
