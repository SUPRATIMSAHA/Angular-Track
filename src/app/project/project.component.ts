import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';
import { StarWarsService } from './start-wars.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [StarWarsService, LogService]
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
