import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LogService } from "./log.service";
import { HttpClient, HttpResponse } from '@angular/common/http'


@Injectable()
export class StarWarsService {
  private characters: Array<{name: string, side: string}> = [];

  private logService: LogService;
  charactersChanged = new Subject<void>();
  http: HttpClient;

  constructor(logService: LogService, http: HttpClient) {
    this.logService = logService;
    this.http = http;
  }

  fetchCharacters() {
    this.http.get<[]>('https://swapi.dev/api/people/').subscribe((response: any) => {
      const data = response.results.map((char: any) => {
        return {name: char.name, side: ''};
      });
      this.characters = data;
      this.charactersChanged.next();
    })
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
    this.charactersChanged.next();
    this.logService.writeLog(`Changed side of ${charInfo.name}, new side: ${charInfo.side}`)
  }

  addCharacter(name: string, side: string) {
    const index = this.characters.findIndex(char => char.name === name);
    if (index !== -1) return;
    this.characters.push({name, side});
  }
}
