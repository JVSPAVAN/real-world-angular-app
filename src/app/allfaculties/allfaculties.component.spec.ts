import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfacultiesComponent } from './allfaculties.component';

describe('AllfacultiesComponent', () => {
  let component: AllfacultiesComponent;
  let fixture: ComponentFixture<AllfacultiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllfacultiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllfacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
