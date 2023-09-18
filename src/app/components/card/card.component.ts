import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/models/movie.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent<T> implements OnInit {

  @Input() mediaType: string = '';
  @Input() movies: Movie[] = [];
  constructor() { }

  ngOnInit(): void {

  }

}
