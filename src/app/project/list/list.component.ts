import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() characters!: Array<{name: string, side: string}>;
  @Output() sideAssigned: EventEmitter<{name: string, side: string}> = new EventEmitter<{name: string, side: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAssign(charInfo: {name: string, side: string}) {
    this.sideAssigned.emit({name: charInfo.name, side: charInfo.side})
  }

}
