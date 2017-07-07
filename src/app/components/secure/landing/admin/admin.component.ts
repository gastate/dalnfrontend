import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { SearchService } from '../../../../services/search.service';
import {Router} from "@angular/router";
import {UserLoginService} from '../../../../services/user-login.service';
import {LoggedInCallback} from '../../../../services/cognito.service';


import { Post } from '../../../../model/post-model';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, LoggedInCallback {


  approval_list: Post[];

  currentlyLoggedIn: boolean;

  constructor(
      public authService: AuthService,
      public searchService: SearchService,
      public userService: UserLoginService,
      public router: Router
  ) {
      this.userService.isAuthenticated(this);
      console.log("In AdminComponent.");
   }

  ngOnInit() {
    //   this.getApproveList();
  }

  approvePost(postId : string) {
      this.authService.adminApprovePost(postId);
      console.log("Approve post fired");
  }

  changePageHead(page: number) {
      this.searchService.pageHead = page;
      console.log("page head changed to " + this.searchService.pageHead);
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
      if(!isLoggedIn) {
          console.log("Not logged in, returning to login page.");
          this.currentlyLoggedIn = false;
          this.router.navigate(['/login']);
      }
      this.currentlyLoggedIn = true;
  }

  logout(event){
      if(this.currentlyLoggedIn){
          console.log("logging out...");
          this.userService.logout();
          this.router.navigate(['/home']);
      }
      this.router.navigate(['/home']);
  }

  // getApproveList(){
  //     this.authService.getApprovalList().subscribe((data) => {
  //         // TODO: handle edge cases
  //         this.approval_list = data;
  //     });
  // }



}
