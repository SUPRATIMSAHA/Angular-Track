import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() characters!: Array<{name: string, side: string}>;

  constructor() { }

  ngOnInit(): void {
  }
}
