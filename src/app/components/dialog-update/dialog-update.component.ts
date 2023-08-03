import { Component, Input } from '@angular/core';
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
  @Input() item!: Item;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public cartService: CartService
  ) {
    // this.myForm.addControl('ID', this.id);
    this.myForm.addControl('name', this.name);
    this.myForm.addControl('price', this.price);
    this.myForm.addControl('quantity', this.quantity);
    this.myForm.addControl('image', this.image);
    this.myForm.addControl('stock', this.stock);
  }

  myForm: FormGroup = new FormGroup({});
  // id: FormControl = new FormControl('');
  name: FormControl = new FormControl('');
  price: FormControl = new FormControl(0);
  quantity: FormControl = new FormControl(0);
  image: FormControl = new FormControl('');
  stock: FormControl = new FormControl(0);

  update() {
    let oldItem = this.cartService.itemToUpdate;
    let newItem = {...oldItem,...this.myForm.value};
    console.log(oldItem);
    console.log(newItem);
    this.cartService.updateItemDialog(newItem);
    alert('Đã cập nhật');
  }
}
