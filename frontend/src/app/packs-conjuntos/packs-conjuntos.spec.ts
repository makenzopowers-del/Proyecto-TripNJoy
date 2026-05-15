import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksConjuntos } from './packs-conjuntos';

describe('PacksConjuntos', () => {
  let component: PacksConjuntos;
  let fixture: ComponentFixture<PacksConjuntos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacksConjuntos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacksConjuntos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
