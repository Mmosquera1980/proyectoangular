import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPasajeroComponent } from './index-pasajero.component';

describe('IndexPasajeroComponent', () => {
  let component: IndexPasajeroComponent;
  let fixture: ComponentFixture<IndexPasajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPasajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
