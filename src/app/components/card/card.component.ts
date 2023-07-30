import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(public cartService: CartService){
    
  }
 
  @Input()
  item!: Item;
  @Output()
  newItem = new EventEmitter<Item>();

  // addToCart(item: Item){
  //   this.newItem.emit(item);
  //   alert('Bạn đã thêm thành công sản phẩm vào giỏ hàng')
  // }

  deleteItem(item: Item){
    this.cartService.deleteCard(item);
  }
}
