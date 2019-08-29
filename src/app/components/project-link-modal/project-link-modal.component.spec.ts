import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLinkModalComponent } from './project-link-modal.component';

describe('ProjectLinkModalComponent', () => {
  let component: ProjectLinkModalComponent;
  let fixture: ComponentFixture<ProjectLinkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectLinkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLinkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
