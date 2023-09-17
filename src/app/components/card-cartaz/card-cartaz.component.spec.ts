import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCartazComponent } from './card-cartaz.component';

describe('CardCartazComponent', () => {
  let component: CardCartazComponent;
  let fixture: ComponentFixture<CardCartazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCartazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCartazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
