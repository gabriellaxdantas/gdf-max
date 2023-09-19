import { TestBed } from '@angular/core/testing';

import { SearchMoviesService } from './search-movies.service';

describe('SearchMoviesService', () => {
  let service: SearchMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
