// Import Component form the angular core package
import { Component, NgModule, OnChanges, Input, trigger, state, animate, transition, style } from '@angular/core';



// Compoent Decorator
@Component({
  //Name of our tag
  selector: 'app-slider',
  //Template for the tag
  templateUrl: "slider.component.html",
  //Styles for the tag
  styles: [`slider.component.css`]
})


export class SliderComponent implements OnChanges {
  @Input() isVisible: boolean = true;
  visibility = 'shown';

  constructor() { }

  ngOnChanges() {
    this.visibility = this.isVisible ? 'hidden' : 'shown';
  }
}
