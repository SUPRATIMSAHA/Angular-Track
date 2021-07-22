import { Component, OnInit, Input } from '@angular/core';
import { StarWarsService } from '../start-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() character!: {name: string, side: string};
  swServices: StarWarsService;

  constructor(swServices: StarWarsService) {
    this.swServices = swServices;
  }

  ngOnInit(): void {
  }

  onAssign(side: string) {
    // this.sideAssigned.emit({name: this.character.name, side: side})
    this.swServices.onSideAssigned({name: this.character.name, side: side})
  }

}
