import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevOpsPresComponent } from './dev-ops-pres.component';

describe('DevOpsPresComponent', () => {
  let component: DevOpsPresComponent;
  let fixture: ComponentFixture<DevOpsPresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevOpsPresComponent]
    });
    fixture = TestBed.createComponent(DevOpsPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
