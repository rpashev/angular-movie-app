import { Component, OnInit } from '@angular/core';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'movie-app';

  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.store.user$.subscribe((user) => console.log(user));
  }
}
