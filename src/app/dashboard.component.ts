import { Component } from '@angular/core'

@Component({
  selector: 'app-dashboard',
  template: `
    <p>App is {{ loadState }}</p>
    <input type="text" [(ngModel)]="loadState" >
    <br />
    <br />
    <button class="btn btn-success" (click)="changeLoadingState()">Click to change state</button>
  `
})
export class DashboardComponent {
  loadState:string = 'loading'

  changeLoadingState() {
    this.loadState = 'finished'
  }
}
