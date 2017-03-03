var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
var AppFooterComponent = (function () {
    function AppFooterComponent(_router, _activatedRoute) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
    }
    AppFooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events
            .filter(function (event) { return event instanceof NavigationEnd; })
            .map(function () { return _this._activatedRoute; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) { _this.twitterView(); _this.faceBookView(); });
    };
    AppFooterComponent.prototype.ngAfterViewInit = function () {
    };
    AppFooterComponent.prototype.twitterView = function () {
        !function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + "://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, "script", "twitter-wjs");
    };
    AppFooterComponent.prototype.faceBookView = function () {
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id))
                return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    };
    return AppFooterComponent;
}());
AppFooterComponent = __decorate([
    Component({
        selector: 'daln-footer',
        templateUrl: './app-footer.component.html',
        styleUrls: ['./app-footer.component.css']
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute])
], AppFooterComponent);
export { AppFooterComponent };
//# sourceMappingURL=../../../../src/app/app-footer/app-footer.component.js.map