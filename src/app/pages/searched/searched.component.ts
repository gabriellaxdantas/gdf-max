import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/models/movie.model';
import { SearchMoviesService } from 'src/app/services/search-movies.service';

@Component({
  selector: 'app-searched',
  templateUrl: './searched.component.html',
  styleUrls: ['./searched.component.css']
})
export class SearchedComponent implements OnInit {
  query: string = '';
  results: Movie[] = [];
  @Input() mediaType: string = '';

  constructor(
    private searchState: SearchMoviesService,
    private searchService: SearchMoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchState.query$.subscribe((query) => {
      this.query = query;
    });

    this.route.queryParams.subscribe((params) => {
      if (params['query']) {
        this.searchService.searchMoviesAndShows(params['query']).subscribe((results) => { // Correção aqui
          this.results = results;
          console.log(this.results);
        });
      }
    });
  }
}
