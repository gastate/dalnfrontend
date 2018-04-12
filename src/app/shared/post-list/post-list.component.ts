import { Component, Input, OnInit } from "@angular/core";
import { SearchService } from "../../services/search.service";
import { Post } from "../../model/post-model";

@Component({
  selector: "post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  constructor(public page: SearchService) { }
  @Input() postList: Post[];
  @Input() totalNumberOfPosts: number;
  approvalMessage: string[] = [];
  errorMessage: string[] = [];

  ngOnInit() {
  }

  successHandler(event: any) {
    this.approvalMessage.push(event);
    if (this.approvalMessage.length >= 3) {
      this.approvalMessage.splice(0, 2);
    }
  }

  errorHandler(event: any) {
    this.errorMessage.push(event);
    if (this.errorMessage.length >= 3) {
      this.errorMessage.splice(0, 2);
    }
  }
}
