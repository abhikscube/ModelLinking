import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulledModelComponent } from './pulled-model.component';

describe('PulledModelComponent', () => {
  let component: PulledModelComponent;
  let fixture: ComponentFixture<PulledModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulledModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulledModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
