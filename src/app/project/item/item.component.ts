import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() character!: {name: string, side: string};
  @Output() sideAssigned: EventEmitter<{name: string, side: string}> = new EventEmitter<{name: string, side: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAssign(side: string) {
    this.sideAssigned.emit({name: this.character.name, side: side})
  }

}
