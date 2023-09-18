import { Component, OnInit , Input} from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-card-popular-shows',
  templateUrl: './card-popular-shows.component.html',
  styleUrls: ['./card-popular-shows.component.css']
})
export class CardPopularShowsComponent implements OnInit {
  mediaType = 'tv';
  @Input() movies: any[] = [];
  @Input() posterUrl: string = '';
  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
    this.movieService.searchTVShowsInHighDemand().subscribe(data => {
      this.movies = data.results;
    });
  }


}
