import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/models/movie.model';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {

  private apiKey = 'cbdd96bc30bc48336cc257305a0fc74c';
  private apiUrl = 'https://api.themoviedb.org/3';
  private language = 'pt-BR';

  private querySubject = new BehaviorSubject<string>('');
  query$ = this.querySubject.asObservable();
  constructor(private http: HttpClient) { }

  setQuery(query: string) {
    this.querySubject.next(query);
  }

  searchMoviesAndShows(querySubject: string): Observable<Movie[]> {
    const searchUrl = `${this.apiUrl}/search/multi?api_key=${this.apiKey}&language=${this.language}&query=${querySubject}`;
    console.log('Search URL:', searchUrl);

    return this.http.get(searchUrl).pipe(
      map((data: any) => {
        console.log('API Response:', data);
        return data.results.map((result: any) => {
          return {
            id: result.id,
            poster_path: result.poster_path,
            title: result.title || result.name,
            overview: result.overview,
            media_type: result.media_type
          };
        });
      }),
      catchError((error) => {
        console.error('API Error:', error);
        return [];
      })
    );
  }


}
