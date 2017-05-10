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

  changePaginationSize(paginationSize : number) {
      this.searchService.changePaginationSize(paginationSize);
  }


}
