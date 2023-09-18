import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-card-ranked-shows',
  templateUrl: './card-ranked-shows.component.html',
  styleUrls: ['./card-ranked-shows.component.css']
})
export class CardRankedShowsComponent implements OnInit {
  mediaType = 'tv';
  @Input() movies: any[] = [];
  @Input() posterUrl: string = '';
  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
    this.movieService.searchTVShowsRanked().subscribe(data => {
      this.movies = data;
    });
  }

}
