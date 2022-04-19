import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmetaComponent } from './smeta.component';

describe('SmetaComponent', () => {
  let component: SmetaComponent;
  let fixture: ComponentFixture<SmetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
