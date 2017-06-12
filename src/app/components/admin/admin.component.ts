import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SearchService } from '../../services/search.service';

import { Post } from '../../model/post-model';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  authService: AuthService;
  searchService: SearchService;

  approval_list: Post[];

  constructor(
      _authService: AuthService,
      _searchService : SearchService
  ) {
      this.authService = _authService;
      this.searchService = _searchService;
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

  // getApproveList(){
  //     this.authService.getApprovalList().subscribe((data) => {
  //         // TODO: handle edge cases
  //         this.approval_list = data;
  //     });
  // }



}
