import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SearchMoviesService } from 'src/app/services/search-movies.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isSearchOpen = false;
  isScrolled: boolean = false;
  query: string = '';


  toggleSearch() {
    if (this.isSearchOpen) {
      this.searchState.setQuery(this.query);
      this.router.navigate(['/searched'], { queryParams: { query: this.query } });
    } else {
      this.router.navigate(['/']);
    }

    this.isSearchOpen = !this.isSearchOpen;
  }

  constructor(private searchState: SearchMoviesService, private router: Router, private searchService: SearchMoviesService, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    console.log('teste')
    this.searchState.query$.subscribe(query => {
      this.query = query;
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
}


