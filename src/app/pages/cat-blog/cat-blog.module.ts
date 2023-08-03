import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatBlogRoutingModule } from './cat-blog-routing.module';
import { CatBlogComponent } from './cat-blog.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CatService } from 'src/app/services/cat.service';
import { CardCatComponent } from './components/card-cat/card-cat.component';

@NgModule({
  declarations: [CatBlogComponent, CardCatComponent],
  imports: [CommonModule, CatBlogRoutingModule, SharedModule],
})
export class CatBlogModule {
  constructor(public catSv: CatService) {
    this.catSv.getCatFacts(100,5);
  }
}
