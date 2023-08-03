import { createReducer, on } from '@ngrx/store'
import { CatFactState } from '../states/cat-facts.states'
import { CatFactActions } from '../actions/cat-facts.action'

const initialState: CatFactState = {
    catFact: null,
    catFacts: [],
    isLoading: false,
    error: '',
}

export const CatFactReducer = createReducer(
    initialState,
    on(CatFactActions.getCatFacts, state => {
        return {
            ...state,
            isLoading: true,
            error: '',
        }
    }),
    on(CatFactActions.getCatFactsSuccess, (state,data) => {
        return {
            ...state,
            isLoading: false,
            error: '',
            catFacts: data.catFacts,
        }
    }),
    on (CatFactActions.getCatFactsError, (state,error) => {
        return {
            ...state,
            isLoading: false,
            error: error.error,
        }
    })
)