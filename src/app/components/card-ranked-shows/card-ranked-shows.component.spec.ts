import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRankedShowsComponent } from './card-ranked-shows.component';

describe('CardRankedShowsComponent', () => {
  let component: CardRankedShowsComponent;
  let fixture: ComponentFixture<CardRankedShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRankedShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRankedShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
