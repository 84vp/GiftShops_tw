import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselNewProdComponent } from './carusel-new-prod.component';

describe('CaruselNewProdComponent', () => {
  let component: CaruselNewProdComponent;
  let fixture: ComponentFixture<CaruselNewProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaruselNewProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaruselNewProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
