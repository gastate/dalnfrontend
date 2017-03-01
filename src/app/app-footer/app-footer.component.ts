import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'daln-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit () {
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

}
