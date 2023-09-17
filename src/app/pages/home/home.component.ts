import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.searchMoviesInHighDemand().subscribe(data => {
      this.movies = data.results;
    });
  }

}
