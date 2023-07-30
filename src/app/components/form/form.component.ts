import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Timestamp } from 'firebase/firestore';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  listItems: Item[] = [];

  constructor(public cartService: CartService) {
    this.myForm.addControl('id', this.id);
    this.myForm.addControl('name', this.name);
    this.myForm.addControl('price', this.price);
    this.myForm.addControl('quantity', this.quantity);
    this.myForm.addControl('image', this.image);
    this.myForm.addControl('stock', this.stock);
    this.listItems = this.cartService.listItems;
    console.log(this.listItems);
  }

  myForm: FormGroup = new FormGroup({});
  id: FormControl = new FormControl('');
  name: FormControl = new FormControl('');
  price: FormControl = new FormControl('');
  quantity: FormControl = new FormControl('');
  image: FormControl = new FormControl('');
  stock: FormControl = new FormControl('');

  submit() {
    let newItem: Item = {
      id: Timestamp.now().toDate().getTime().toString(),
      name: this.name.value,
      price: this.price.value,
      quantity: this.quantity.value,
      image: this.image.value,
      stock: this.stock.value,
    };

    let itemID = this.listItems.find((item) => item.id === newItem.id);
    let itemName = this.listItems.find((item) => item.name === newItem.name);

    if (itemID) {
      alert('Id already exists');
      this.myForm.reset();
    } else if (
      this.myForm.value.name == '' &&
      this.myForm.value.id == '' &&
      this.myForm.value.price == '' &&
      this.myForm.value.stock == ''
    ) {
      alert('Please enter full information of the item');
    } else if (newItem.id == '') {
      alert('ID required');
      this.myForm.value.id = '';
    } else if (itemName) {
      alert('Name already exists');
      this.myForm.reset();
    } else if (newItem.name == '') {
      alert('Name required');
      this.myForm.value.name = '';
    } else if (newItem.price <= 0) {
      alert('Price must be above 0');
      this.myForm.value.price = '';
    } else if (newItem.stock <= 0) {
      alert('Stock must be above 0');
      this.myForm.value.stock = '';
    } else {
      this.cartService.listItems.push(newItem);
      alert('Đã thêm thành công sản phẩm vào menu');
      console.log(this.listItems);
      this.myForm.reset();
    }
  }
}
