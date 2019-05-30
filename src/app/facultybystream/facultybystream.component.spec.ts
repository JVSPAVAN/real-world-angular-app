import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultybystreamComponent } from './facultybystream.component';

describe('FacultybystreamComponent', () => {
  let component: FacultybystreamComponent;
  let fixture: ComponentFixture<FacultybystreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultybystreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultybystreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
