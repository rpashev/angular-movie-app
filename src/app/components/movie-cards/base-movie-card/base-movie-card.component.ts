import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-movie-card',
  templateUrl: './base-movie-card.component.html',
  styleUrls: ['./base-movie-card.component.scss'],
})
export class BaseMovieCardComponent implements OnInit {
  @Input() imgLink: string;
  @Input() title: string;
  @Input() id: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(event: any) {
    if (event.type === 'keypress' && event.keyCode === 13) {
      this.router.navigate([`details/${this.id}`]);
    }
    if (event.type === 'click') this.router.navigate([`details/${this.id}`]);
  }
}
