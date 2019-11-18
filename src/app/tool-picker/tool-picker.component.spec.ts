import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolPickerComponent } from './tool-picker.component';

describe('ToolPickerComponent', () => {
  let component: ToolPickerComponent;
  let fixture: ComponentFixture<ToolPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
