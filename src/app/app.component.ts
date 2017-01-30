import {Component} from '@angular/core';

@Component({
  selector: 'daln-app',
  template: `
  <h1>{{title}}</h1>


    <!-- Logo / Menu
================================================== -->
<header class="header">
  <div class="container">
    <div class="row">

      <div class="span4">
         <div id="header-wrap"> <a href="index.html" class="logo"> <img src="assets/img/LogoSoftBlue.jpg" alt=""> </a>
         </div>

        <app-search2 (searchResults)="onSearch($event)" ></app-search2>
       </div>

     <div class="span8">
        <nav>
        <div id="menuToggle">
        <input id= "menu-button" type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

                <ul class="right" id="main-menu">
                    <li> <a routerLink="/home"> home </a>
                    <li> <a routerLink="/about"> about </a> </li>
                    <li> <a href="https://thedaln.wordpress.com/" target="_blank"> DALN Blog </a> </li>
                    <li> <a routerLink="/contact"> contact </a> </li>
                    <!-- <li> <a routerLink="/#"> login </a> </li> -->
                    <li> <a routerLink="/create"> submit a literacy narrative </a> </li>
                    <!-- <li class="icon"> <a href="javascript:void(0);" style="font-size:15px;">☰</a> </li> -->
                </ul>
        </div>
        </nav>
        </div>
      </div>


  </div>
</header>

    <router-outlet>

`
})

export class AppComponent {
}
