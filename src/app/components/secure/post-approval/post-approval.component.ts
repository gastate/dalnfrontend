import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {AuthService} from '../../../services/auth.service';
import {PostService} from '../../../services/post.service';
import {UserLoginService} from '../../../services/user-login.service';
import {LoggedInCallback} from '../../../services/cognito.service';

import { Post } from '../../../model/post-model';


@Component({
  selector: 'app-post-approval',
  templateUrl: './post-approval.component.html',
  styleUrls: ['./post-approval.component.css']
})
export class PostApprovalComponent implements OnInit, LoggedInCallback {

  approval_list: Post[] = [];
  errorMessage: string;
  getdev: boolean;

  loading: boolean = false;
  failed: boolean = false;

  constructor(
      public authService: AuthService,
      public postService: PostService,
      public userService: UserLoginService,
      public router: Router
  ) {
      this.userService.isAuthenticated(this);
   }

  ngOnInit() {
      this.getUnapproved();
      this.getdev = true;
  }

  getUnapproved(){
      this.loading = true;
      if (this.postService.cache_admin_posts.length === 0) {
          this.postService.getUnapprovedPosts().subscribe(
          (data) => {
              this.approval_list = data;
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
