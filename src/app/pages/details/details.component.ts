import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  movieId!: number;
  movieDetails: any; // Tipo apropriado para os detalhes do filme

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieId = +params['id']; // Obtém o ID do filme da rota

      // Verificar se movieId é um número válido
      if (!isNaN(this.movieId)) {
        // Use o serviço para carregar os detalhes do filme com base no movieId
        this.movieService.getMovieDetails(this.movieId).subscribe((data) => {
          this.movieDetails = data; // Atualize os detalhes do filme
        });
      } else {
        // Tratar o caso em que movieId não é válido (por exemplo, redirecionar para uma página de erro)
      }
    });
  }

}
