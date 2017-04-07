import {Component, Input} from '@angular/core';

@Component({
  selector: 'daln-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
    @Input()
     _class = "container";

    toggleFull () : void {
        if(this._class == "container"){
            this._class = "container-fluid";
        } else {
            this._class = "container";
        }
    }
}
