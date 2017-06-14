import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Output() currentPageEmitter: EventEmitter<number>;

  searchService : SearchService;

// If you're wondering about the paraentheses, see: http://g00glen00b.be/component-angular-2/ and check out what each parameter means here: https://pokeapi.co/docsv2/ and test out the parameters here: http://pokeapi.co/api/v2/evolution-chain/?limit=10&offset=0

  @Input() pageNumber: number = 0; // user specified page number to start from. (offset)
  @Input() resultsSize: number = 1; // number of results to display in post-list component. (limit)
  @Input() total_posts: number = 1; // number of total results in a search query. (size)
  @Input() range: number = 10; // page range to display. (range)

  currentPage: number;
  // totalPages: number; // NOTE: Currently not in use since endpoint does not return it.

  more_pages: boolean;
  next_posts: number; // number to increment and see if there are any more posts left.

  constructor(_searchService: SearchService) { this.searchService = _searchService; }

  ngOnInit() {
      this.currentPage = 0;
      this.total_posts = 0;

      this.more_pages = true;
      this.next_posts = 0;

      this.currentPageEmitter = new EventEmitter<number>();
  }

  ngOnChanges() {

  }



  setCurrentPage(page: number){
      this.currentPage = page;
      this.currentPageEmitter.emit(this.currentPage);
  }

  // getCurrentPage(){
  // }

  getTotalPages() {

  }

  createButtons() {
      // total_posts / resultsSize = total_pages; // number of total pages
     // total_pages = total_buttons // ngfor through to create buttons
  }


  getNextPage() {
      // increment the index of searchPosts array.slice of searchPosts
      // displayPosts will be searchPosts, searchPosts will be the pagination head array.
  }

  // getMaxPages() {
  //     this.searchService.search_page(this.searchService.searchQuery, this.searchService.pageHead, 0)
  //       .subscribe((data) => {
  //           if ((data == null) || (data.length <= 0) ){
  //               this.max_pages = 0;
  //           } else if (data.length <= this.searchService.pageHead) {
  //               this.max_pages = Math.ceil(Math.max(this.searchService.pageHead, 1) / Math.max(this.searchService.resultsSize, 1));
  //           }
  //       });
  // }

   areMorePages() {
       this.searchService.search_page(this.searchService.searchTerm, this.searchService.pageHead, this.next_posts)
        .subscribe((data) => {
            if ((data == null) || (data.length <= 0)) {
                this.more_pages = false;
            } else {
                this.next_posts++;
                this.more_pages = true;
            }
        });

   }





}
