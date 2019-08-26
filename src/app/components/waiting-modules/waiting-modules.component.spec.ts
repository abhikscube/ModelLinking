import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingModulesComponent } from './waiting-modules.component';

describe('WaitingModulesComponent', () => {
  let component: WaitingModulesComponent;
  let fixture: ComponentFixture<WaitingModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
