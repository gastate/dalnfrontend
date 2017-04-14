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
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
    descForm: FormGroup;
    submitService : SubmitFormService;
    title : string;
    subjects : string [] = [];
    nations : string [] = [];
    regions : string [] = [];
    states : string [] = [];
    geos : string [] = [];
    languages : string [] = [];
    period :  string [] = [];

  constructor(
    private _router: Router,
    private fb: FormBuilder,
    _submitService: SubmitFormService
  ) {
    this.submitService = _submitService;
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



  next() {
    this.period = this.descForm.value.coveragePeriod;

    // singular service arrays are set to the plural local arrays.
    this.submitService.subject = this.subjects;
    this.submitService.language = this.languages;
    this.submitService.coveragePeriod = this.period;
    this.submitService.coverageNationality = this.nations;
    this.submitService.coverageRegion = this.regions;
    this.submitService.coverageStateProvince = this.states;
    this.submitService.coverageSpatial = this.geos;

    this._router.navigateByUrl('/create/media');
  }



}
