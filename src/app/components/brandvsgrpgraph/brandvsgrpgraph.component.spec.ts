import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandvsgrpgraphComponent } from './brandvsgrpgraph.component';

describe('BrandvsgrpgraphComponent', () => {
  let component: BrandvsgrpgraphComponent;
  let fixture: ComponentFixture<BrandvsgrpgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandvsgrpgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandvsgrpgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
