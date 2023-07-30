import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {  } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public cartService: CartService, public router: Router) {
  }
  
  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToCart() {
    this.router.navigate(['/shopping-cart']);
  }
}
