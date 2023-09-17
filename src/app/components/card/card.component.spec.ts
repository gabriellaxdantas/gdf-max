import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { Movie } from 'src/models/movie.model';

describe('CardComponent', () => {
  let component: CardComponent<Movie>;
  let fixture: ComponentFixture<CardComponent<Movie>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent<CardComponent<Movie>>(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
