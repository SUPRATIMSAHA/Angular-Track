import { Injectable } from "@angular/core";
import { LogService } from "./log.service";


@Injectable()
export class StarWarsService {
  private characters: Array<{name: string, side: string}> = [
    { name: "Sacred Games", side: '' },
    { name: "Mirzapur", side: '' },
  ]

  logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
  }

  getCharacters(choosenList: string) {
    if(choosenList === "all") {
      return this.characters.slice()
    }
    return this.characters.filter(char => {
      return char.side === choosenList;
    })
  }

  onSideAssigned(charInfo: {name: string, side: string}) {
    const index = this.characters.findIndex(char => char.name === charInfo.name);
    this.characters[index].side = charInfo.side;
    this.logService.writeLog(`Changed side of ${charInfo.name}, new side: ${charInfo.side}`)
  }

  addCharacter(name: string, side: string) {
    this.characters.push({name, side});
  }
}
