import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkingSimulationComponent } from './linking-simulation.component';

describe('LinkingSimulationComponent', () => {
  let component: LinkingSimulationComponent;
  let fixture: ComponentFixture<LinkingSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkingSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkingSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
