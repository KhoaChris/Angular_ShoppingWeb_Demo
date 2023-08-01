import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';
import { DialogUpdateComponent } from '../dialog-update/dialog-update.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(public cartService: CartService, public dialog:MatDialog,public auth:AuthService){
    
  }
 
  @Input()
  item!: Item;
  @Output()
  newItem = new EventEmitter<Item>();

  deleteItem(item: Item){
    this.cartService.deleteCard(item);
  }

  openDialog() {
    this.dialog.open(DialogUpdateComponent);
  }
}
