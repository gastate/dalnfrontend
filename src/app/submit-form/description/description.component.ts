import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { DatepickerComponent } from '../datepicker/datepicker.component';
import { Router } from "@angular/router";

import { Post } from "../../model/post-model";

import { SubmitFormService } from "../submit-form.service";

@Component({
  selector: "app-description",
  templateUrl: "./description.component.html",
  styleUrls: ["./description.component.css"]
})
export class DescriptionComponent implements OnInit {
  descForm: FormGroup;
  submitService: SubmitFormService;
  title: string;
  description: string;
  subjects: string[] = [];
  nations: string[] = [];
  regions: string[] = [];
  states: string[] = [];
  geos: string[] = [];
  languages: string[] = [];
  period: string[] = [];
  decadeOptions: string[] = [];
  dateCreated: string = "";

  constructor(
    private _router: Router,
    private fb: FormBuilder,
    _submitService: SubmitFormService
  ) {
    this.submitService = _submitService;
    this.initForm();
  }

  ngOnInit() {}

  initForm() {
    this.descForm = this.fb.group({
      title: [""],
      description: [""]
    });
    //init decade options with the last 100 years
    let today = Math.ceil((new Date().getFullYear() + 1) / 10) * 10;
    for (let i = 0; i < 100; i += 10) {
      this.decadeOptions.push(today - i - 10 + " - " + (today - i - 1));
    }
  }

  isValidForm() {
    return (
      this.title &&
      this.title.trim().length > 1 &&
      this.description &&
      this.description.trim().length > 1 &&
      this.dateCreated &&
      this.period &&
      this.period.length > 0 &&
      this.subjects &&
      this.subjects.length > 0 &&
      this.languages &&
      this.languages.length > 0
    );
  }

  addSubject(subjectInput: any) {
    if (subjectInput.value.trim()) {
      this.subjects.push(subjectInput.value.trim());
    }
    subjectInput.value = "";
  }

  removeSubject(subjectValue: string) {
    this.subjects.splice(this.subjects.indexOf(subjectValue), 1);
  }

  addNation(nation: any) {
    if (nation.value.trim()) {
      this.nations.push(nation.value.trim());
    }
    nation.value = "";
  }

  removeNation(nation: string) {
    this.nations.splice(this.nations.indexOf(nation), 1);
  }

  addRegion(region: any) {
    if (region.value.trim()) {
      this.regions.push(region.value.trim());
    }
    region.value = "";
  }

  removeRegion(region: string) {
    this.regions.splice(this.regions.indexOf(region), 1);
  }

  addState(state: any) {
    if (state.value.trim()) {
      this.states.push(state.value.trim());
    }
    state.value = "";
  }

  removeState(state: string) {
    this.states.splice(this.states.indexOf(state), 1);
  }

  addGeo(geo: string) {
    this.geos.push(geo);
  }

  removeGeo(geo: string) {
    this.geos.splice(this.geos.indexOf(geo), 1);
  }

  addLanguage(language: any) {
    if (language.value.trim()) {
      this.languages.push(language.value.trim());
    }
    language.value = "";
  }

  removeLanguage(language: string) {
    this.languages.splice(this.languages.indexOf(language), 1);
  }

  next() {
    this.submitService.title = this.title.trim();
    this.submitService.description = this.description.trim();
    this.submitService.dateCreated = this.dateCreated;
    this.submitService.subject = this.subjects;
    this.submitService.language = this.languages;
    this.submitService.coveragePeriod = this.period;
    if (this.nations && this.nations.length > 0) {
      this.submitService.coverageNationality = this.nations;
    }
    if (this.regions && this.regions.length > 0) {
      this.submitService.coverageRegion = this.regions;
    }
    if (this.states && this.states.length > 0) {
      this.submitService.coverageStateProvince = this.states;
    }

    this._router.navigateByUrl("/create/media");
  }
}
