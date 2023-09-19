import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from 'src/models/movie.model';
import { Cast } from 'src/models/cast.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey = 'cbdd96bc30bc48336cc257305a0fc74c';
  private apiUrl = 'https://api.themoviedb.org/3';
  private language = 'pt-BR';

  constructor(private http: HttpClient) {}

  getTopRanked(type: string): Observable<any> {
    let url = '';

    if (type === 'movie') {
      url = `${this.apiUrl}/movie/top_rated`;
    } else if (type === 'tv') {
      url = `${this.apiUrl}/tv/top_rated`;
    }

    return this.http.get(`${url}?api_key=${this.apiKey}&language=${this.language}`);
  }

  searchMoviesInHighDemand(): Observable<Movie[]> {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=${this.language}`).pipe(
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

  searchMoviesInTheatre(): Observable<Movie[]> {
    return this.http.get(`${this.apiUrl}/movie/now_playing?api_key=${this.apiKey}&language=${this.language}`).pipe(
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

  searchTVShowsInHighDemand(): Observable<Movie[]> {

    return this.http.get(`${this.apiUrl}/tv/popular?api_key=${this.apiKey}&language=${this.language}`).pipe(
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
  searchTVShowsRanked(): Observable<Movie[]>{
    return this.http.get(`${this.apiUrl}/tv/top_rated?api_key=${this.apiKey}&language=${this.language}`).pipe(
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

  getMediaDetails(mediaId: number, mediaType: string): Observable<Movie> {
    return this.http.get(`${this.apiUrl}/${mediaType}/${mediaId}?api_key=${this.apiKey}&language=${this.language}`).pipe(
      map((data: any) => {
        const isTVShow = !!data.first_air_date;
        return {
          id: data.id,
          poster_path: data.poster_path,
          backdrop_path: data.backdrop_path,
          title: isTVShow ? data.name : data.title,
          alternative_titles: data.tagline,
          description: data.overview,
          gender: data.genres?.map((genre: any) => genre.name) || [],
          releaseDate: isTVShow ? data.first_air_date : data.release_date,
          rate: data.vote_average,
          duration: isTVShow ? null : data.runtime, // Defina como nulo para séries de TV
          ageRule: data.append_to_response || data.content_ratings,
          media_type: isTVShow ? 'tv' : 'movie' // Define o tipo de mídia com base no resultado
        };
      })
    );
  }



  getMovieCast(movieId: number, mediaType: string): Observable<Cast[]> {
    return this.http
      .get(`${this.apiUrl}/${mediaType}/${movieId}/credits?api_key=${this.apiKey}&language=${this.language}`)
      .pipe(
        map((data: any) => {
          return data.cast.map((cast: any) => {
            return {
              id: cast.id,
              profile_path: cast.profile_path,
              original_name: cast.original_name,
              character: cast.character,
            };
          });
        })
      );
  }

  getSimilarMovies(mediaId: number, mediaType: string): Observable<Movie[]> {
    return this.http
      .get(`${this.apiUrl}/${mediaType}/${mediaId}/similar?api_key=${this.apiKey}&language=${this.language}`)
      .pipe(
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




}
