import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressStackComponent } from './progress-stack.component';

describe('ProgressStackComponent', () => {
  let component: ProgressStackComponent;
  let fixture: ComponentFixture<ProgressStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
