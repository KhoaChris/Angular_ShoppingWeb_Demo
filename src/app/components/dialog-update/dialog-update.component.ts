import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';

/**
 * @title Dialog elements
 */
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-update.component.html',
})
export class DialogUpdateComponent {
  constructor(public dialog: MatDialog,public router: Router,public cartService: CartService) {
    
    this.myForm.addControl('ID', this.id);
    this.myForm.addControl('name', this.name);
    this.myForm.addControl('price', this.price);
    this.myForm.addControl('quantity', this.quantity);
    this.myForm.addControl('image', this.image);
    this.myForm.addControl('stock', this.stock);
  }

  myForm: FormGroup = new FormGroup({});
  id: FormControl = new FormControl('');
  name: FormControl = new FormControl('');
  price: FormControl = new FormControl(0);
  quantity: FormControl = new FormControl(0);
  image: FormControl = new FormControl('');
  stock: FormControl = new FormControl(0);

  update() {
    let newItem: Item = {
      id: this.id.value,
      name: this.name.value,
      price: this.price.value,
      quantity: this.quantity.value,
      image: this.image.value,
      stock: this.stock.value,
    };
    this.cartService.updateItem(newItem);
    alert('Đã cập nhật');
  }
}
