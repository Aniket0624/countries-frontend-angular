import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutryIndividualComponentComponent } from './coutry-individual-component.component';

describe('CoutryIndividualComponentComponent', () => {
  let component: CoutryIndividualComponentComponent;
  let fixture: ComponentFixture<CoutryIndividualComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoutryIndividualComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutryIndividualComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
