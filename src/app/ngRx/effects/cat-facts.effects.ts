import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CatService } from 'src/app/services/cat.service';
import { CatFactActions } from '../actions/cat-facts.action';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CatFact } from 'src/app/models/cat.model';

@Injectable()
export class CatFactEffects {
  constructor(private actions$: Actions, public catSv: CatService) {}

  getCatFacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CatFactActions.getCatFacts),
      switchMap(() =>
        this.catSv.getCatFacts(100, 8).pipe(
          switchMap((catFacts: any) => {
            return this.catSv.getCatImages(8).pipe(
              map((catImages: any) => {
                catFacts = catFacts['data'].map(
                  (catFact: CatFact, index: number) => {
                    console.log(catFact);
                    return {...catFact, image: catImages[index]['url']};
                  }
                );
                return CatFactActions.getCatFactsSuccess({catFacts: catFacts});
              }),
              catchError((error) => {
                return of(CatFactActions.getCatFactsError(error));
              })
            );
          }),
      )),
    )
  );
}
