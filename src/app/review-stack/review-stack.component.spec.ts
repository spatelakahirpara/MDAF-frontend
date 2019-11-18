import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewStackComponent } from './review-stack.component';

describe('ReviewStackComponent', () => {
  let component: ReviewStackComponent;
  let fixture: ComponentFixture<ReviewStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
