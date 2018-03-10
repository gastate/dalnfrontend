import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRouteSnapshot } from "@angular/router";
import { CanComponentDeactivate } from "./submit-can-deactivate-guardservice";

@Component({
  selector: "app-submit-form",
  templateUrl: "./submit-form.component.html",
  styleUrls: ["./submit-form.component.css"]
})
export class SubmitFormComponent {
  canDeactivate(route: ActivatedRouteSnapshot) {
    // if the editName !== this.user.name
    if (route.url.toString().includes("create") !== true) {
      //return window.confirm('Are you sure? Leaving will discard any changes.');
    }

    return true;
  }
}
