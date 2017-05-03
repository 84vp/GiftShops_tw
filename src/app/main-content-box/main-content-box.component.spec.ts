import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentBoxComponent } from './main-content-box.component';

describe('MainContentBoxComponent', () => {
  let component: MainContentBoxComponent;
  let fixture: ComponentFixture<MainContentBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
