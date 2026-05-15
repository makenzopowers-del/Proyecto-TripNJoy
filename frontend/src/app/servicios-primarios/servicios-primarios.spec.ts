import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosPrimarios } from './servicios-primarios';

describe('ServiciosPrimarios', () => {
  let component: ServiciosPrimarios;
  let fixture: ComponentFixture<ServiciosPrimarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosPrimarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosPrimarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
