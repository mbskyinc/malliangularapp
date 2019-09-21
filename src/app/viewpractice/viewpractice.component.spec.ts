import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpracticeComponent } from './viewpractice.component';

describe('ViewpracticeComponent', () => {
  let component: ViewpracticeComponent;
  let fixture: ComponentFixture<ViewpracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
