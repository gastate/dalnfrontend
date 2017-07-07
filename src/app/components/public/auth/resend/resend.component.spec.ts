/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResendComponent } from './resend.component';

describe('ResendComponent', () => {
  let component: ResendComponent;
  let fixture: ComponentFixture<ResendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
