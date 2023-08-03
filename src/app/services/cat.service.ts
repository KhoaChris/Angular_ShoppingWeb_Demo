import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatFact } from '../models/cat.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  constructor(public http: HttpClient) { 
    
  }

  getCatFacts(maxLength: number, limit: number){
    let responseFacts = this.http.get(`https://catfact.ninja/facts?max_length=${maxLength}&limit=${limit}`);
    return responseFacts as Observable<CatFact[]>;
  }

  getCatImages(limit: number) {
    let responseImages = this.http.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}`);
    return responseImages as Observable<any>;
  }

  // async getCatFacts(maxLength: number, limit: number) : Promise<CatFact[]>{
  //   let result: CatFact[] = [];
  //   let responseFacts = this.http.get(`https://catfact.ninja/facts?max_length=${maxLength}&limit=${limit}`);
  //  let responseImage = this.http.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}`);
  //   let data = await new Promise<CatFact[]>((resolve, reject) => {
  //     responseFacts.subscribe((data:any) => {
  //       console.log(data['data']);
  //       resolve(data['data']);
  //     });
  //   });

  //   result = data as CatFact[];
  //   return result;
  // }

}
