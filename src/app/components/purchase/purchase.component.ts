import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent {
  constructor(public cartService: CartService) {}

  @Input()
  cart: Item[] = [];
  @Output()
  onCartChanged = new EventEmitter<boolean>();

  total = 0;
  purchase() {
    if (this.cartService.cart.length == 0) {
      alert('Giỏ hàng hiện tại đang rỗng !!!');
    } else {
      let total = 0;
      let quantities = 0;
      this.cartService.cart.forEach((item) => {
        total += item.price * item.quantity;
      });
      this.total = total;
      alert('Total: ' + total);
      alert('Bạn đã thành công thanh toán đơn hàng');
    }
    this.cartService.cart = [];
    this.onCartChanged.emit(true);
    console.log(this.cart);
    this.total = 0;
  }
}
