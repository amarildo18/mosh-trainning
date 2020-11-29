import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() isFavorite = false;
  @Output() isFavoritechange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onFavoriteChange(): void{

    this.isFavorite = !this.isFavorite;
    this.isFavoritechange.emit();
  }

}
