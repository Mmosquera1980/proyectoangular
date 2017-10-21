import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTiqueteComponent } from './index-tiquete.component';

describe('IndexTiqueteComponent', () => {
  let component: IndexTiqueteComponent;
  let fixture: ComponentFixture<IndexTiqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexTiqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTiqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
