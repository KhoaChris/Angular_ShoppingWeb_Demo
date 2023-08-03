import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatFact } from '../models/cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  constructor(public http: HttpClient) { 
    
  }

  async getCatFacts(maxLength: number, limit: number) : Promise<CatFact[]>{
    let result: CatFact[] = [];
    let response = this.http.get(`https://catfact.ninja/facts?max_length=${maxLength}&limit=${limit}`);
    
    let data = await new Promise<CatFact[]>((resolve, reject) => {
      response.subscribe((data:any) => {
        console.log(data['data']);
        resolve(data['data']);
      });
    });

    result = data as CatFact[];
    return result;
  }
}
