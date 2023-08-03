import { CatFact } from "src/app/models/cat.model";

export interface CatFactState{
    catFact: CatFact | null;
    catFacts: CatFact[];
    isLoading: boolean;
    error: string;
}