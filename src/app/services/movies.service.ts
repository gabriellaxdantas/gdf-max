import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from 'src/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey = 'cbdd96bc30bc48336cc257305a0fc74c';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  searchMoviesInHighDemand(): Observable<Movie[]> {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`).pipe(
      map((data: any) => {
        return data.results.map((movie: any) => {
          return {
            id: movie.id,
            poster_path: movie.poster_path,
            title: movie.title,
            overview: movie.overview,
          };
        });
      })
    );
  }

  searchMoviesInTheatre(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/now_playing?api_key=${this.apiKey}`);
  }

  searchTVShowsInHighDemand(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tv/popular?api_key=${this.apiKey}`);
  }

  getMovieDetails(movieId: number): Observable<Movie> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`).pipe(
      map((data: any) => {
        return {
          id: data.id,
          poster_path: data.poster_path,
          title: data.title,
          subtitle: data.subtitle,
          description: data.description,
          gender: data.gender,
          relaseDate: data.relaseDate,
          rate: data.rate,
          duration: data.duration,
          ageRule: data.ageRule,
        };
      })
    );
  }
}
