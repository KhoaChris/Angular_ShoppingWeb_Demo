import {Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

/**
 * @title Dialog elements
 */
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-update.component.html',
})
export class DialogUpdateComponent{
  constructor(public dialog: MatDialog, public router:Router,public cartService: CartService) {

  }

  myForm: FormGroup = new FormGroup({});
  id: FormControl = new FormControl('');
  name: FormControl = new FormControl('');
  price: FormControl = new FormControl(0);
  quantity: FormControl = new FormControl(0);
  image: FormControl = new FormControl('');
  stock: FormControl = new FormControl(0);
}

