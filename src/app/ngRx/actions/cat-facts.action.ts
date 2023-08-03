import { createAction, props } from '@ngrx/store'
import { CatFact } from 'src/app/models/cat.model'

export const CatFactActions = {
    getCatFacts: createAction('[CatFact] Get CatFacts '),
    getCatFactsSuccess: createAction('[CatFact] Get CatFacts Success', props<{catFacts: CatFact[]}>()),
    getCatFactsError: createAction('[CatFact] Get CatFacts Error', props<{error: string}>()),

    //addCatFact: createAction('[CatFact] Add CatFact', props<{catFact: CatFact}>()),
}