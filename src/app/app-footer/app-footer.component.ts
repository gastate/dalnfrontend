import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'daln-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  constructor(private _router: Router,
              private _activatedRoute : ActivatedRoute
    ) {}

    ngOnInit() {
      this._router.events
        .filter(event => event instanceof NavigationEnd)
        .map(() => this._activatedRoute)
        .map(route => {
          while (route.firstChild) route = route.firstChild;
          return route;
        })
        .filter(route => route.outlet === 'primary')
        .mergeMap(route => route.data)
        .subscribe((event) => {this.twitterView(); this.faceBookView();});
    }



  ngAfterViewInit () {


   }

   twitterView() : void {

       !function(d,s,id){
           var js: any,
               fjs=d.getElementsByTagName(s)[0],
               p='https';
           if(!d.getElementById(id)){
               js=d.createElement(s);
               js.id=id;
               js.src=p+"://platform.twitter.com/widgets.js";
               fjs.parentNode.insertBefore(js,fjs);
           }
       }
       (document,"script","twitter-wjs");

   }

   faceBookView() : void {

        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

   }

}
