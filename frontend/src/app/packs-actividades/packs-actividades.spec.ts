import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksActividades } from './packs-actividades';

describe('PacksActividades', () => {
  let component: PacksActividades;
  let fixture: ComponentFixture<PacksActividades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacksActividades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacksActividades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
