import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-card-cartaz',
  templateUrl: './card-cartaz.component.html',
  styleUrls: ['./card-cartaz.component.css']
})
export class CardCartazComponent implements OnInit {

  @Input() movies: any[] = [];
  @Input() posterUrl: string = '';
  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
    this.movieService.searchMoviesInTheatre().subscribe(data => {
      this.movies = data.results;
    });
  }

}
