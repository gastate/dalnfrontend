import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'daln-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  private sub: any;
  private sub1: any;

  constructor(private _router: Router,
              private _activatedRoute : ActivatedRoute
    ) {}

    ngOnInit() {

    }



  ngAfterViewInit () {
      this.sub = this._router.events.subscribe(val => {
            if (val instanceof NavigationEnd) {
              (<any>window).twttr = (function (d, s, id) {
                let js: any, fjs = d.getElementsByTagName(s)[0],
                    t = (<any>window).twttr || {};
                if (d.getElementById(id)) return t;
                js = d.createElement(s);
                js.id = id;
                js.src = "https://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);

                t._e = [];
                t.ready = function (f: any) {
                    t._e.push(f);
                };

                return t;
              }(document, "script", "twitter-wjs"));

              if ((<any>window).twttr.ready()) {
                  (<any>window).twttr.widgets.load();
              }

            }
          });


        this.sub1 = this._router.events.subscribe(val => {
            if (val instanceof NavigationEnd) {
                (function(d, s, id) {
                    if (d.getElementById(id)) return;
                    var js: any, fjs = d.getElementsByTagName(s)[0];
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));

                // if ((<any>window).FB) {
                //     (<any>window).FB.XFMBL.parse();
                // }

            }
        });
   }


   faceBookView() : void {

        // (function(d, s, id) {
        //   var js, fjs = d.getElementsByTagName(s)[0];
        //   if (d.getElementById(id)) return;
        //   js = d.createElement(s); js.id = id;
        //   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
        //   fjs.parentNode.insertBefore(js, fjs);
        // }(document, 'script', 'facebook-jssdk'));

   }

   ngOnDestroy() {
       this.sub.unsubscribe();
       this.sub1.unsubscribe();
   }

}
