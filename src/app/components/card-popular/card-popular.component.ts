import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-card-popular',
  templateUrl: './card-popular.component.html',
  styleUrls: ['./card-popular.component.css']
})
export class CardPopularComponent implements OnInit {
  @Input() movies: any = {};
  @Input() posterUrl: string = '';

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.searchMoviesInHighDemand().subscribe(data => {
      this.movies = data;
    });
  }
}
