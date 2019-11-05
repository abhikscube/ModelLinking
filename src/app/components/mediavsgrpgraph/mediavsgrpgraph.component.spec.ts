import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediavsgrpgraphComponent } from './mediavsgrpgraph.component';

describe('MediavsgrpgraphComponent', () => {
  let component: MediavsgrpgraphComponent;
  let fixture: ComponentFixture<MediavsgrpgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediavsgrpgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediavsgrpgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
