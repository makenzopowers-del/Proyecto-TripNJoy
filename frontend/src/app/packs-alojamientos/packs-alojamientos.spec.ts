import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksAlojamientos } from './packs-alojamientos';

describe('PacksAlojamientos', () => {
  let component: PacksAlojamientos;
  let fixture: ComponentFixture<PacksAlojamientos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacksAlojamientos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacksAlojamientos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
