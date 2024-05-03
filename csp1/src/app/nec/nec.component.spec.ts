import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NECComponent } from './nec.component';

describe('NECComponent', () => {
  let component: NECComponent;
  let fixture: ComponentFixture<NECComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NECComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NECComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
