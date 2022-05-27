import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-btn',
  templateUrl: './toggle-btn.component.html',
  styleUrls: ['./toggle-btn.component.scss'],
})
export class ToggleBtnComponent implements OnInit {
  @Output() open = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.open.emit();
  }
}
