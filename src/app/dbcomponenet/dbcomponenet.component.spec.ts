import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbcomponenetComponent } from './dbcomponenet.component';

describe('DbcomponenetComponent', () => {
  let component: DbcomponenetComponent;
  let fixture: ComponentFixture<DbcomponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbcomponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbcomponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
