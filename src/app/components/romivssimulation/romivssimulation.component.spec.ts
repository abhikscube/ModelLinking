import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomivssimulationComponent } from './romivssimulation.component';

describe('RomivssimulationComponent', () => {
  let component: RomivssimulationComponent;
  let fixture: ComponentFixture<RomivssimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomivssimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomivssimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
