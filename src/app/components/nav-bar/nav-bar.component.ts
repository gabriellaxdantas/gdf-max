import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // Importe o ActivatedRoute
import { SearchMoviesService } from 'src/app/services/search-movies.service';
import { FormsModule } from '@angular/forms';
import { Movie } from 'src/models/movie.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isSearchOpen = false;
  isScrolled: boolean = false;
  query: string = '';
  mediaId: number = 0;

  toggleSearch() {
    if (this.isSearchOpen) {
      this.searchState.setQuery(this.query);
      this.router.navigate(['/searched'], { queryParams: { query: this.query } });
    } else {
      this.router.navigate(['/']);
    }

    this.isSearchOpen = !this.isSearchOpen;
  }

  constructor(
    private searchState: SearchMoviesService,
    private router: Router,
    private searchService: SearchMoviesService,
    private renderer: Renderer2,
    private el: ElementRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchState.query$.subscribe((query) => {
      this.query = query;
    });

    this.route.params.subscribe((params: any) => {
      this.mediaId = +params['id'];
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        this.renderer.addClass(this.el.nativeElement, 'scrolled');
        this.isScrolled = true;
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'scrolled');
        this.isScrolled = false;
      }
    });
  }

  navigateToDetails(type: string) {

    this.router.navigate(['/details', type, this.mediaId]);
  }
}
