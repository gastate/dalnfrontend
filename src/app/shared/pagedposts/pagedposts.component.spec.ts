/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagedpostsComponent } from './pagedposts.component';

describe('PagedpostsComponent', () => {
  let component: PagedpostsComponent;
  let fixture: ComponentFixture<PagedpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagedpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
