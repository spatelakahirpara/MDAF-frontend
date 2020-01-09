import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBuildComponent } from './select-build.component';

describe('SelectBuildComponent', () => {
  let component: SelectBuildComponent;
  let fixture: ComponentFixture<SelectBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
