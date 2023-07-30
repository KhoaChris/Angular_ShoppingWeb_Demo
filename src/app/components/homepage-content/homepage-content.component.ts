import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-content',
  templateUrl: './homepage-content.component.html',
  styleUrls: ['./homepage-content.component.scss']
})
export class HomepageContentComponent {
  constructor(public router:Router){
    
  }
  
  navigateToCart() {
    this.router.navigate(['/shopping-cart']);
  }
}
