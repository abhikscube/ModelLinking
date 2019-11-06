import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeserisegrpvsmediatypegrpComponent } from './timeserisegrpvsmediatypegrp.component';

describe('TimeserisegrpvsmediatypegrpComponent', () => {
  let component: TimeserisegrpvsmediatypegrpComponent;
  let fixture: ComponentFixture<TimeserisegrpvsmediatypegrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeserisegrpvsmediatypegrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeserisegrpvsmediatypegrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
