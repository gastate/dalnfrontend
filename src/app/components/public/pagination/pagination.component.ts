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
  totalPages: number[];
  pages: any[];
  pagesPerDot: number;

  constructor() {
    this.pageSelectionEmitter = new EventEmitter<number>();
    this.totalPages = [];
    this.pages = [];
    this.pagesPerDot = 5;
  }

  ngOnInit() {
    this.showPagination =
      this.totalRecords / this.resultsPerPage <= 1 ? false : true;
  }

  ngOnChanges() {
    this.currentPage =
      this.currentPage == 0 ? 0 : this.currentPage / this.resultsPerPage;
    this.totalPages = [];
    //calculate pages
    let numPages =
      this.totalRecords < this.resultsPerPage
        ? 1
        : Math.ceil(this.totalRecords / this.resultsPerPage);
    for (let i = 1; i <= numPages; i++) {
      this.totalPages.push(i);
    }
    this.currentPage++;

    this.pages = [];
    if (this.totalPages.length <= this.pagesPerDot) {
      this.pages = this.totalPages;
    } else {
      this.pages = this.pagination(this.currentPage, this.totalPages.length);
    }
  }

  pagination(current: number, last: number) {
    var delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || (i >= left && i < right)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  }

  changePage(page: any) {
    if (this.currentPage == page || page == '...') {
      return;
    }
    this.currentPage = Number(page);
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
