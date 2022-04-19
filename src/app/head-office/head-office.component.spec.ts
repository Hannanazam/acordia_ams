import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOfficeComponent } from './head-office.component';

describe('HeadOfficeComponent', () => {
  let component: HeadOfficeComponent;
  let fixture: ComponentFixture<HeadOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
