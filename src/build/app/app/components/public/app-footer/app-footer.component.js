"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AppFooterComponent = (function () {
    function AppFooterComponent(_router, _activatedRoute) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
    }
    AppFooterComponent.prototype.ngOnInit = function () {
    };
    AppFooterComponent.prototype.ngAfterViewInit = function () {
        this.sub = this._router.events.subscribe(function (val) {
            if (val instanceof router_1.NavigationEnd) {
                window.twttr = (function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
                    if (d.getElementById(id))
                        return t;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "https://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js, fjs);
                    t._e = [];
                    t.ready = function (f) {
                        t._e.push(f);
                    };
                    return t;
                }(document, "script", "twitter-wjs"));
                if (window.twttr.ready()) {
                    window.twttr.widgets.load();
                }
            }
        });
        this.sub1 = this._router.events.subscribe(function (val) {
            if (val instanceof router_1.NavigationEnd) {
                (function (d, s, id) {
                    if (d.getElementById(id))
                        return;
                    var js, fjs = d.getElementsByTagName(s)[0];
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
            }
        });
    };
    AppFooterComponent.prototype.faceBookView = function () {
        // (function(d, s, id) {
        //   var js, fjs = d.getElementsByTagName(s)[0];
        //   if (d.getElementById(id)) return;
        //   js = d.createElement(s); js.id = id;
        //   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
        //   fjs.parentNode.insertBefore(js, fjs);
        // }(document, 'script', 'facebook-jssdk'));
    };
    AppFooterComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
    };
    return AppFooterComponent;
}());
AppFooterComponent = __decorate([
    core_1.Component({
        selector: 'daln-footer',
        templateUrl: './app-footer.component.html',
        styleUrls: ['./app-footer.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute])
], AppFooterComponent);
exports.AppFooterComponent = AppFooterComponent;
//# sourceMappingURL=app-footer.component.js.map