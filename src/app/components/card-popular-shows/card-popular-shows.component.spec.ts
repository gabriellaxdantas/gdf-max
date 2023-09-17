import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPopularShowsComponent } from './card-popular-shows.component';

describe('CardPopularShowsComponent', () => {
  let component: CardPopularShowsComponent;
  let fixture: ComponentFixture<CardPopularShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPopularShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPopularShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
