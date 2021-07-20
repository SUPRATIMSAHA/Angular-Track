import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  @Input() items:string[] = [];
  @Output() itemAdded: EventEmitter<string> = new EventEmitter<string>();
  newItem: string = '';

  onButtonClick() {
    this.itemAdded.emit(this.newItem);
    this.newItem = '';
  }

}
