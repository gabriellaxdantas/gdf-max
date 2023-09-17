import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isScrolled: boolean = false; // Adicione esta linha

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        this.renderer.addClass(this.el.nativeElement, 'scrolled');
        this.isScrolled = true; // Atualize o valor aqui quando rolado
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'scrolled');
        this.isScrolled = false; // Atualize o valor aqui quando voltar ao topo
      }
    });
  }
}
