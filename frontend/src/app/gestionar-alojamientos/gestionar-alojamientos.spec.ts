import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarAlojamientos } from './gestionar-alojamientos';

describe('GestionarAlojamientos', () => {
  let component: GestionarAlojamientos;
  let fixture: ComponentFixture<GestionarAlojamientos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarAlojamientos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarAlojamientos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
