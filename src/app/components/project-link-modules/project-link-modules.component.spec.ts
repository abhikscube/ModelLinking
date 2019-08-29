import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLinkModulesComponent } from './project-link-modules.component';

describe('ProjectLinkModulesComponent', () => {
  let component: ProjectLinkModulesComponent;
  let fixture: ComponentFixture<ProjectLinkModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectLinkModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLinkModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
