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
  mediaId!: number;
  mediaType!: string; // Vai conter 'tv/top' neste exemplo
  mediaDetails: Movie | undefined;
  mediaCastResult: Cast[] = [];
  mediaImages: string[] = [];
  similarMovies: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService,
    private datePipe: DatePipe
  ) {}


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.mediaId = +params['id'];
      this.mediaType = params['mediaType'];

      if (!isNaN(this.mediaId)) {
        this.movieService.getMediaDetails(this.mediaId, this.mediaType).subscribe((data) => {
          this.mediaDetails = data;
        });

        this.movieService.getMovieCast(this.mediaId, this.mediaType).subscribe((cast) => {
          this.mediaCastResult = cast;
        });

        this.movieService.getSimilarMovies(this.mediaId, this.mediaType).subscribe((similarMovies) => {
          this.similarMovies = similarMovies;
        });
      }
    });
  }

}
