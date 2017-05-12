import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  authService: AuthService;
  searchService: SearchService;

  constructor(
      _authService: AuthService,
      _searchService : SearchService
  ) {
      this.authService = _authService;
      this.searchService = _searchService;
   }

  ngOnInit() {
  }

  approvePost(postId : string) {
      this.authService.adminApprovePost(postId);
      console.log("Approve post fired");
  }

  changeResultHead(results: number) {
      this.searchService.resultHead = results;
      console.log("Result head changed to " + this.searchService.resultHead);
  }



}
