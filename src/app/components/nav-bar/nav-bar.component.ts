import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 100) { // Ajuste esse valor conforme necessário
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
