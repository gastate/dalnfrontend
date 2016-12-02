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
/**
 * Created by lkittogsuedu on 12/1/16.
 */
var core_1 = require('@angular/core');
var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'daln-footer',
            template: "\n \n<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"span4\">\n        <h3>About</h3>\n        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n        <h3>Connect With Us</h3>\n        <!-- social begin here -->\n        <ul class=\"socicon left\">\n          <li> <a href=\"#\" class=\"share-icon\"> </a> </li>\n          <li> <a href=\"#\" class=\"google\"> </a> </li>\n          <li> <a href=\"#\" class=\"facebook\"> </a> </li>\n          <li> <a href=\"#\" class=\"twitter\"> </a> </li>\n          <li> <a href=\"#\" class=\"flickr\"> </a> </li>\n          <li> <a href=\"#\" class=\"dribbble\"> </a> </li>\n          <li> <a href=\"#\" class=\"linkedin\"> </a> </li>\n          <li class=\"last\"> <a href=\"#\" class=\"vimeo\"> </a> </li>\n        </ul>\n      </div>\n      <!-- tweets begin here -->\n      <div class=\"span4\">\n        <h3>Latest Tweets</h3>\n        <div class=\"tweets\">\n          <p> Loading Tweets... </p>\n          <ul id=\"tweet-list\" class=\"span4\">\n          </ul>\n        </div>\n      </div>\n      <div class=\"span4\"> <!-- flickr begin here -->\n        <h3>From Flickr</h3>\n        <script type=\"text/javascript\" src=\"http://www.flickr.com/badge_code_v2.gne?count=8&amp;source=user&amp;user=52617155@N08&amp;layout=x&amp;display=random&amp;size=s\"></script> </div>\n      <div class=\"span12 copy\"> &copy; 2012 NLINE. All Rights Reserved. </div>\n    </div>\n  </div>\n</footer> \n"
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.comp.js.map