import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StarWarsService } from '../start-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  characters: Array<{name: string, side: string}> = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;
  loadedSide: string = 'all';
  subscription!: Subscription;


  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.characters = this.swService.getCharacters(params.side);
      this.loadedSide = params.side;
    })
    this.subscription = this.swService.charactersChanged.subscribe(() => {
      this.characters = this.swService.getCharacters(this.loadedSide);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
