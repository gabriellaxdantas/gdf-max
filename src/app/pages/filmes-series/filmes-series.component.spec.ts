import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesSeriesComponent } from './filmes-series.component';

describe('FilmesSeriesComponent', () => {
  let component: FilmesSeriesComponent;
  let fixture: ComponentFixture<FilmesSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmesSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmesSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
