import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarActividades } from './gestionar-actividades';

describe('GestionarActividades', () => {
  let component: GestionarActividades;
  let fixture: ComponentFixture<GestionarActividades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarActividades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarActividades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
