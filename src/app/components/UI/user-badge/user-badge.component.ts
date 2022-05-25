import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.scss'],
})
export class UserBadgeComponent implements OnInit {
  @Input() image: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
