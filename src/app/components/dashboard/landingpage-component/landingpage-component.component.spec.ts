import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageComponentComponent } from './landingpage-component.component';

describe('LandingpageComponentComponent', () => {
  let component: LandingpageComponentComponent;
  let fixture: ComponentFixture<LandingpageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingpageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
