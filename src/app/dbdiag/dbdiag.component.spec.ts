import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbdiagComponent } from './dbdiag.component';

describe('DbdiagComponent', () => {
  let component: DbdiagComponent;
  let fixture: ComponentFixture<DbdiagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbdiagComponent]
    });
    fixture = TestBed.createComponent(DbdiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
