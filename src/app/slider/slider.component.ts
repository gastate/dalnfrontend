// Import Component form the angular core package
import { Component, NgModule } from '@angular/core';
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
})

@NgModule({
    imports: []
})

export class SliderComponent {


  constructor() { }

  ngOnInit() {
  }
}
