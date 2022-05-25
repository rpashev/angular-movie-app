import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watched-movie-card',
  templateUrl: './watched-movie-card.component.html',
  styleUrls: ['./watched-movie-card.component.scss'],
})
export class WatchedMovieCardComponent implements OnInit {
  @Input() imgLink: string;
  @Input() title: string;
  @Input() year: string;
  @Input() genre: string;
  @Input() id: string;
  @Input() runtime: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(event: any) {
    if (event.type === 'keypress' && event.keyCode === 13) {
      this.router.navigate([`details/${this.id}`]);
    }
    if (event.type === 'click') this.router.navigate([`details/${this.id}`]);
  }
}
