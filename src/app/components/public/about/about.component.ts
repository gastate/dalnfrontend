import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { Ng2DeviceService } from 'ng2-device-detector';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [ './about.component.css' ]
})
export class AboutComponent implements OnInit {

  searchService: SearchService;
  numberOfPosts: number;
  deviceInfo: any = null;
  mobile: boolean;

  constructor(
    _searchService: SearchService,
    private deviceService: Ng2DeviceService
  ) {
    this.searchService = _searchService;
  }

  title = 'About';

  ngOnInit() {
    //   this.searchService.getSearchEngineSize().subscribe( (data) => {
    //      console.log("Number of Posts: " + data);
    //      this.numberOfPosts = data;
    //   });
    this.deviceInfo = this.deviceService.getDeviceInfo();
    if (this.deviceInfo.os === "ios" || this.deviceInfo.os === "android" || this.deviceInfo.device === "iphone") {
      this.mobile = true;

    }
  }
}
