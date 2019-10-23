import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRejectedComponent } from './post-rejected.component';

describe('PostRejectedComponent', () => {
  let component: PostRejectedComponent;
  let fixture: ComponentFixture<PostRejectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRejectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
