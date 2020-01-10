import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBuildToolsComponent } from './select-build-tools.component';

describe('SelectBuildToolsComponent', () => {
  let component: SelectBuildToolsComponent;
  let fixture: ComponentFixture<SelectBuildToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBuildToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBuildToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
