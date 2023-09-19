import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedComponent } from './searched.component';

describe('SearchedComponent', () => {
  let component: SearchedComponent;
  let fixture: ComponentFixture<SearchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
