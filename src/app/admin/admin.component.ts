import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  authService: AuthService;

  constructor(
      _authService: AuthService
  ) {
      this.authService = _authService;
   }

  ngOnInit() {
  }

  approvePost(postId : string) {
      this.authService.adminApprovePost(postId);
      console.log("Approvepost fired");
  }


}
