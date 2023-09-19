import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-filmes-series',
  templateUrl: './filmes-series.component.html',
  styleUrls: ['./filmes-series.component.css']
})
export class FilmesSeriesComponent implements OnInit {

  type: string = '';
  topRankedData: any[] = [];
  constructor(private route: ActivatedRoute, private moviesServies:MoviesService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.type = params['type'];
      console.log(this.type)
      this.moviesServies.getTopRanked(this.type).subscribe((data) => {
        this.topRankedData = data.results;
      });
    });
  }
}

