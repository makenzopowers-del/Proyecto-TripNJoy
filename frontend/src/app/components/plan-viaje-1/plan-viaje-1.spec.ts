import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanViaje1 } from './plan-viaje-1';

describe('PlanViaje1', () => {
  let component: PlanViaje1;
  let fixture: ComponentFixture<PlanViaje1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanViaje1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanViaje1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
