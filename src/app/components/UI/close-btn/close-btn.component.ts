import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-close-btn',
  templateUrl: './close-btn.component.html',
  styleUrls: ['./close-btn.component.scss'],
})
export class CloseBtnComponent implements OnInit {
  @Output() close = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.close.emit();
  }
}
