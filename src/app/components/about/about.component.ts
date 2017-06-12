import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  searchService: SearchService;
  numberOfPosts : number;

  constructor(
      _searchService : SearchService
  ) {
      this.searchService = _searchService;
  }

  title = 'About';

  ngOnInit() {
    //   this.searchService.getSearchEngineSize().subscribe( (data) => {
    //      console.log("Number of Posts: " + data);
    //      this.numberOfPosts = data;
    //   });
  }



}
