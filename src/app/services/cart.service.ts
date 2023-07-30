import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  listItems: Item[] = [
    {
      id: '1',
      name: 'Burger LChicken',
      price: 30000,
      quantity: 0,
      image:
        'https://cdn.lotteria.vn/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/l/b/lb0047-online_2.png',
      stock: 10,
    },
    {
      id: '2',
      name: 'Burger Bò',
      price: 25000,
      quantity: 0,
      image:
        'https://cdn.lotteria.vn/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/l/b/lb0046-online_3.png',
      stock: 10,
    },
    {
      id: '3',
      name: 'Double Cheese Burger',
      price: 39000,
      quantity: 0,
      image:
        'https://cdn.lotteria.vn/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/l/b/lb0042-online_3.png',
      stock: 10,
    },
    {
      id: '4',
      name: 'Burger Tôm',
      price: 29000,
      quantity: 0,
      image:
        'https://cdn.lotteria.vn/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/l/b/lb0042-online_3.png',
      stock: 10,
    },
    {
      id: '5',
      name: 'Burger Bò Bulgogi',
      price: 30000,
      quantity: 0,
      image:
        'https://cdn.lotteria.vn/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/l/b/lb0004-online_3.png',
      stock: 10,
    },
  ];

  showData() {
    console.log(this.listItems);
  }

  cart: Item[] = [];

  addToCart(item: Item) {
    let index = this.cart.findIndex((i) => {
      return i.id == item.id;
    });
    console.log(index);
    if (index != -1) {
      let subIndex = this.listItems.findIndex((i) => {
        return i.id == this.cart[index].id;
      });
      if (subIndex != -1 && this.listItems[subIndex].stock > 0) {
        this.cart[index].quantity++;
        this.listItems[subIndex].stock--;
        console.log(this.cart);
        console.log(this.listItems[subIndex].stock);
      } else {
        alert(`Item ${item.name} is out of stock`);
      }
    } else {
      let subIndex = this.listItems.findIndex((i) => {
        return i.id == item.id;
      });
      if (subIndex != -1 && this.listItems[subIndex].stock > 0) {
        item.quantity++;
        this.cart.push(item);
        this.listItems[subIndex].stock--;
        console.log(this.listItems[subIndex].stock);
        console.log(this.cart);
      }
    }
  }

  deleteCard(item: Item) {
    console.log(item);
    let index = this.listItems.findIndex((i) => {
      return i.id == item.id;
    });
    if (index != -1) {
     this.listItems.splice(index, 1);
    } else {
      return;
    }
  }
}
