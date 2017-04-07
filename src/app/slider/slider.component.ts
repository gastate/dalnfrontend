// Import Component form the angular core package
import { Component, NgModule, OnChanges, Input, trigger, state, animate, transition, style } from '@angular/core';
// Will use Slide model in admin level
import {Slide} from '../model/slide-model';



// Compoent Decorator
@Component({
  //Name of our tag
  selector: 'app-slider',
  //Template for the tag
  templateUrl: "slider.component.html",
  //Styles for the tag
  styles: [`slider.component.css`],
  animations: [
      trigger('visibilityChanged', [
          state('shown' , style({ opacity: 1 })),
          state('hidden', style({ opacity: 0 , display: 'none' })),
          transition('* => *', animate('.5s'))
    ])
  ]
})


export class SliderComponent implements OnChanges {
  @Input() isVisible : boolean = true;
  visibility = 'shown';

  constructor() { }

  ngOnChanges() {
      this.visibility = this.isVisible ? 'hidden' : 'shown';
  }
}
