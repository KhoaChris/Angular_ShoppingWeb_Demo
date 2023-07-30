import { Component } from '@angular/core';
import { CartService } from './services/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular_demo_01';

  constructor(public cartService: CartService, public router: Router) {
    this.cartService.showData();
  }
  // cart: Item[] = [];

  
  }

