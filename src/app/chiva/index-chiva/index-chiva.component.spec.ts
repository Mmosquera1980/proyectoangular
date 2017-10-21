import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexChivaComponent } from './index-chiva.component';

describe('IndexChivaComponent', () => {
  let component: IndexChivaComponent;
  let fixture: ComponentFixture<IndexChivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexChivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexChivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
