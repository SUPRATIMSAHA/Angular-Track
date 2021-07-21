import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  characters: Array<{name: string, side: string}> = [
    { name: "Sacred Games", side: '' },
    { name: "Mirzapur", side: '' },
  ]

  choosenList: string = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  onChoose(side: string) {
    this.choosenList = side;
  }

  getCharacters() {
    if(this.choosenList === "all") {
      return this.characters.slice()
    }
    return this.characters.filter(char => {
      return char.side === this.choosenList;
    })
  }

  onSideAssigned(charInfo: {name: string, side: string}) {
    const index = this.characters.findIndex(char => char.name === charInfo.name);
    this.characters[index].side = charInfo.side;
  }

}
