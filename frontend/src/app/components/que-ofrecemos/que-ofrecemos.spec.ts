import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueOfrecemos } from './que-ofrecemos';

describe('QueOfrecemos', () => {
  let component: QueOfrecemos;
  let fixture: ComponentFixture<QueOfrecemos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueOfrecemos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueOfrecemos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
