import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectModelPlanComponent } from './select-model-plan.component';

describe('SelectModelPlanComponent', () => {
  let component: SelectModelPlanComponent;
  let fixture: ComponentFixture<SelectModelPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectModelPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectModelPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
