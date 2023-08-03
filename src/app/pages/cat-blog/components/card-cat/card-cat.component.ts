import { Component, Input } from '@angular/core';
import { CatFact } from 'src/app/models/cat.model';

@Component({
  selector: 'app-card-cat',
  templateUrl: './card-cat.component.html',
  styleUrls: ['./card-cat.component.scss']
})
export class CardCatComponent {
  @Input()
  fact!:CatFact;
  
  constructor(){

  }
}
