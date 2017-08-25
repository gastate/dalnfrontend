import { ElementRef, Component, OnInit, animate } from '@angular/core';
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
    searchPosts: Post[] = [];
    posts: Post[] = [];

    showPage: boolean = true;

    loading: boolean = false;
    failed: boolean = false;

    getdev: boolean; //for postlist.
    deviceInfo: any = null;


    constructor(private _postService: PostService,
        private _searchService: SearchService,
        public userService: UserLoginService,
        private deviceService: Ng2DeviceService) {

        this.userService.isAuthenticated(this);
    }



    ngOnInit() {
        this.getPagePosts();
        console.log("HELLO WELCOME TO THE DALN");
        this.deviceInfo = this.deviceService.getDeviceInfo();
        console.log("***********", this.deviceInfo);
    }

    getPagePosts(): void {
        this.loading = true;
        if (!this.deviceInfo) {
            this.deviceInfo = this.deviceService.getDeviceInfo();
            console.log("***********", this.deviceInfo);
        }
        if (this._searchService.cache_posts.length === 0) {
            let postNumber = 8;

            if (this.deviceInfo.os === "ios" || this.deviceInfo.os === "android" || this.deviceInfo.device === "iphone") {
                postNumber = 4
            }
            // TODO Change search param to env variable
            this._searchService.search_page("games", postNumber, 0).subscribe(
                (data) => {
                    this.posts = this._searchService.translatePosts(data.hit);
                    this._searchService.cache_posts = this.posts;
                    this.loading = false;
                }, //Bind to view
                err => {
                    this.loading = false;
                    this.failed = true;
                    // Log errors if any
                    console.log(err);
                });
        } else {
            this.posts = this._searchService.cache_posts;
            this.loading = false;
        }


        // Use for development if search is down.
        // this._postService.getMockPosts().then(
        //     (data) => {
        //         this.posts = this._searchService.translatePosts(data.hit);
        //         this.loading = false;
        //     },
        //     err => {
        //         this.loading = false;
        //         this.failed = true;
        //         console.log(err);
        // });
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
