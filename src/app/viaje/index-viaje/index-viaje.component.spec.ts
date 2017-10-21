import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexViajeComponent } from './index-viaje.component';

describe('IndexViajeComponent', () => {
  let component: IndexViajeComponent;
  let fixture: ComponentFixture<IndexViajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexViajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
