import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../start-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  characters: Array<{name: string, side: string}> =[];

  choosenList: string = 'all';
  swServices: StarWarsService;

  constructor(swServices: StarWarsService) {
    this.swServices = swServices;
   }

  ngOnInit(): void {
  }

  onChoose(side: string) {
    this.choosenList = side;
  }

  getCharacters() {
    return this.characters = this.swServices.getCharacters(this.choosenList);
  }
}
