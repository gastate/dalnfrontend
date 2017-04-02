import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { Router } from '@angular/router';

import {Post} from '../../model/post-model';

import { SubmitFormService } from '../submit-form.service';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  providers: [SubmitFormService]
})
export class DescriptionComponent implements OnInit {
    descForm: FormGroup;
    title : string;
    subjects : string [] = [];
    nations : string [] = [];
    regions : string [] = [];
    states : string [] = [];
    geos : string [] = [];
    languages : string [] = [];

  constructor(
    private _router: Router,
    private fb: FormBuilder,
    private _submitService : SubmitFormService
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.descForm = this.fb.group({
        title: ['', Validators.required],
        description : [''],
        coveragePeriod : ['']
        // dateCreated : [''],

    });
  }

  addSubject(subjectInput : string) {
    this.subjects.push(subjectInput);
  }

  removeSubject(subjectValue : string) {
    this.subjects.splice(this.subjects.indexOf(subjectValue), 1);
  }

  addNation(nation : string) {
    this.nations.push (nation);
  }

  removeNation(nation : string){
    this.nations.splice(this.nations.indexOf(nation), 1);
  }

  addRegion(region : string) {
    this.regions.push(region);
  }

  removeRegion(region : string){
    this.regions.splice(this.regions.indexOf(region), 1);
  }

  addState(state : string) {
    this.states.push(state);
  }

  removeState(state : string){
    this.states.splice(this.states.indexOf(state), 1);
  }

  addGeo(geo : string) {
    this.geos.push(geo);
  }

  removeGeo(geo : string){
    this.geos.splice(this.geos.indexOf(geo), 1);
  }

  addLanguage(language : string) {
    this.languages.push(language);
  }

  removeLanguage(language : string){
    this.languages.splice(this.languages.indexOf(language), 1);
  }

  // getConsole() {
  //     console.log(this.subjects);
  //     console.log(this.nations);
  //     console.log(this.regions);
  //     console.log(this.states);
  //     console.log(this.geos);
  //     console.log(this.languages);
  // }


  back() {
      // return data back through submit-service.
  }

  next() {
    // this.descriptionService.updateDescription(this.form.value);

    let formObj = this.descForm.getRawValue();
    let serialize = JSON.stringify(formObj);

    // this._submitService.getDescObj(serialize);
    this._submitService.getDescriptionFormValues(serialize);
    this._submitService.getDescriptionArrayValues(this.subjects, this.nations, this.regions, this.states, this.geos, this.languages);
    this._router.navigateByUrl('/create/media');
  }



}
