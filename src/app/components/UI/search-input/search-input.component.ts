import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  query: string = '';
  constructor() {}

  ngOnInit(): void {}

  onSearch() {
    console.log(this.query);
  }
}
