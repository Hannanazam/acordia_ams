import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditControlComponent } from './audit-control.component';

describe('AuditControlComponent', () => {
  let component: AuditControlComponent;
  let fixture: ComponentFixture<AuditControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
