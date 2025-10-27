import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieListar } from './serie-listar';

describe('SerieListar', () => {
  let component: SerieListar;
  let fixture: ComponentFixture<SerieListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SerieListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
