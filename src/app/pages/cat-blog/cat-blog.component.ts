import { Component } from '@angular/core';
import { CatFact } from 'src/app/models/cat.model';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cat-blog',
  templateUrl: './cat-blog.component.html',
  styleUrls: ['./cat-blog.component.scss'],
})
export class CatBlogComponent {
  listFacts: CatFact[] = [];
  
  constructor(public catSv: CatService) {
   this.getCatFacts();
  }

  async getCatFacts(){
    let result = await this.catSv.getCatFacts(100,5);
    this.listFacts = result;
    return result;
  }
}
