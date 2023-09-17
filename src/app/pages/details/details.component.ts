import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/models/movie.model';
import { Cast } from 'src/models/cast.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})

export class DetailsComponent implements OnInit {
  movieId!: number;
  movieDetails: Movie | undefined;
  movieCastResult: Cast[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieId = +params['id'];

      if (!isNaN(this.movieId)) {
        this.movieService.getMovieDetails(this.movieId).subscribe((data) => {
          this.movieDetails = data;
          console.log('Backdrop Path:', this.movieDetails.backdrop_path);
          console.log('subtitulo do trem:', this.movieDetails.alternative_titles);
          console.log('titulo:', this.movieDetails.title);
          console.log('sinopse:', this.movieDetails.description);
          console.log('idades:', this.movieDetails.ageRule);
        });

        this.movieService.getMovieCast(this.movieId).subscribe((cast) => {
          this.movieCastResult = cast;
        });
      }
    });
  }
}
