import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CatFact } from 'src/app/models/cat.model';
import { CatFactActions } from 'src/app/ngRx/actions/cat-facts.action';
import { CatFactState } from 'src/app/ngRx/states/cat-facts.states';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cat-blog',
  templateUrl: './cat-blog.component.html',
  styleUrls: ['./cat-blog.component.scss'],
})
export class CatBlogComponent {
  listFacts$!: Observable<CatFactState>
  
  constructor(public catService: CatService,public store: Store<{catFact : CatFactState}>) {
    // this.listFacts$ = store.select((state) => state.catFact.catFacts);
    this.listFacts$ = this.store.select('catFact');
    this.store.dispatch(CatFactActions.getCatFacts());
    this.listFacts$.subscribe((data) => {
      console.log(data.catFacts);
    })

  }
}
