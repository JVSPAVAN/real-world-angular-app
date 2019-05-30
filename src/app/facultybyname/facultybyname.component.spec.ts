import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultybynameComponent } from './facultybyname.component';

describe('FacultybynameComponent', () => {
  let component: FacultybynameComponent;
  let fixture: ComponentFixture<FacultybynameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultybynameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultybynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
