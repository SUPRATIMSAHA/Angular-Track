import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Angular-Track';
  items:Array<string> = ['Apples', 'Bananas', 'Cherries'];

  onItemAdded(newItem:any) {
    this.items.push(newItem);
    console.log(this.items)
  }
}
