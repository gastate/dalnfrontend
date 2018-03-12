import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html"
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() currentPage: number;
  @Input() resultsPerPage: number;
  @Input() totalRecords: number;
  @Output() pageSelectionEmitter: EventEmitter<number>;
  showPagination: boolean;
  pages: number[];

  constructor() {
    this.pageSelectionEmitter = new EventEmitter<number>();
    this.pages = [];
  }

  ngOnInit() {
    this.showPagination =
      this.totalRecords / this.resultsPerPage <= 1 ? false : true;
  }

  ngOnChanges() {
    this.currentPage =
      this.currentPage == 0 ? 0 : this.currentPage / this.resultsPerPage;
    this.pages = [];
    //calculate pages
    let numPages =
      this.totalRecords < this.resultsPerPage
        ? 1
        : Math.ceil(this.totalRecords / this.resultsPerPage);
    for (let i = 1; i <= numPages; i++) {
      this.pages.push(i);
    }
    this.currentPage++;
  }

  changePage(page: number) {
    if (this.currentPage == page) {
      return;
    }
    this.currentPage = page;
    this.pageSelectionEmitter.emit(this.currentPage);
  }

  goNext() {
    if (this.currentPage == this.pages.length) {
      return;
    }
    this.pageSelectionEmitter.emit(Number(this.currentPage) + 1);
  }

  goPrevious() {
    if (this.currentPage == 1) {
      return;
    }
    this.pageSelectionEmitter.emit(Number(this.currentPage) - 1);
  }
}
