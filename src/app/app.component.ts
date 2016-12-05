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
      <div class="span4"> <a href="index.html" class="logo"> <img src="assets/img/header.jpg" alt=""> </a> </div>
      <div class="span8">
        <nav>
                <ul class="right">
                    <li class="current"> <a routerLink="/home"> home </a>
                    <li> <a routerLink="/about"> about </a> </li>
                    <li> <a routerLink="/contact"> contact </a> </li>
                    <li> <a routerLink="/#"> login </a> </li>
                    <li> <a routerLink="/create"> submit a literacy narrative </a> </li>
                </ul>
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
