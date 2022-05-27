import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @Output() onchange = new EventEmitter();
  query: string = '';
  constructor() {}

  ngOnInit(): void {}

  onSearch() {
    this.onchange.emit(this.query);
  }
}
