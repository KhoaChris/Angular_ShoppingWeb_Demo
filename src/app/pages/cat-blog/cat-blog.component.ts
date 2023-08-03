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
export class CatBlogComponent implements OnInit {
  listFacts$: Observable<CatFact[]>
  
  constructor(public store: Store<{catFact : CatFactState}>) {
    this.listFacts$ = store.select((state) => state.catFact.catFacts);
  }

  ngOnInit(): void {
      this.getCatFacts();
  }

  async getCatFacts(){
    this.store.dispatch(CatFactActions.getCatFacts());
    console.log('Loading')
  }
}
