import { ElementRef, Component, OnInit, animate } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { SearchService } from '../../../services/search.service';
import { UserLoginService } from '../../../services/user-login.service';
import { LoggedInCallback } from '../../../services/cognito.service';
import { Ng2DeviceService } from 'ng2-device-detector';

import { Post } from '../../../model/post-model';
// import { routerTransition } from '../router.animations';
import 'rxjs/add/observable/fromPromise';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {


    title = 'DALN Frontend';
    sub: any;
    searchPosts: Post[] = [];
    posts: Post[] = [];

    showPage: boolean = false;

    loading: boolean = false;
    failed: boolean = false;
    mobile: boolean;

    getdev: boolean; //for postlist.
    deviceInfo: any = null;
    route: string;


    constructor(private _postService: PostService,
        private router: Router,
        private _searchService: SearchService,
        public userService: UserLoginService,
        private deviceService: Ng2DeviceService) {
        this.getDeviceInfo();
        this.userService.isAuthenticated(this);
    }



    ngOnInit() {
        return this.sub = this.router.events.subscribe((val) => {
            console.log("Home Component Route: ", val.url);
            this.route = val.url;
            // If not search paginatorResults to be displays then get Posts
            if (!this.route.startsWith("/search?")) {
                this.getPagePosts();
            }
        });

    }

    getDeviceInfo() {
        this.deviceInfo = this.deviceService.getDeviceInfo();
        console.log("***********", this.deviceInfo);
        if (this.deviceInfo.os === "ios" || this.deviceInfo.os === "android" || this.deviceInfo.device === "iphone") {
            this.mobile = true;
        }
    }

    getPagePosts(): void {

        this.showPage = true;
        this.posts = JSON.parse(localStorage.getItem("featuredPosts"));
        console.log("HomeComponent #getPagePosts Posts: ", this.posts);

        if (!this.posts) {
            if (!this.deviceInfo) {
                this.getDeviceInfo();
            }
            this.loading = true;
            let postNumber = 4;

            if (this.mobile) {
                postNumber = 3;
            }
            // TODO Change search param to env variable
            this._searchService.search_page("games", postNumber, 0).subscribe(
                (data) => {
                    this.posts = this._searchService.translatePosts(data.hit);
                    // this._searchService.cache_posts = this.posts;
                    localStorage.setItem("featuredPosts", JSON.stringify(this.posts));
                    this.loading = false;
                }, //Bind to view
                err => {
                    this.loading = false;
                    this.failed = true;
                    // Log errors if any
                    console.log(err);
                });
        }
    }

    showHomePage(event) {
        this.showPage = event;
    }


    displayResults(event) {
        //   console.log("Search hit.", event);
        this.searchPosts = event;
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.getdev = false;
            console.log("get dev false");
        } else {
            this.getdev = true;
        }
    }





}
