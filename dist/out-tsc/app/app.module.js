var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostService } from './services/post.service';
import { AppRoutingModule } from './app-routing.module';
import { PlayerComponent } from './player/player.component';
import { SearchComponent } from './search/search.component';
import { SliderComponent } from './slider/slider.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SafePipe } from './safe.pipe';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HomeComponent,
            PostListComponent,
            PostItemComponent,
            AppFooterComponent,
            AboutComponent,
            ContactComponent,
            PostDetailComponent,
            PlayerComponent,
            SearchComponent,
            SliderComponent,
            PageNotFoundComponent,
            SafePipe
        ],
        imports: [
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            HttpModule,
            JsonpModule,
            AppRoutingModule,
            NgbModule.forRoot()
        ],
        providers: [PostService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../src/app/app.module.js.map