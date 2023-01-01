import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

const bestUrl ="http://localhost:8080/brands"

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http : HttpClient) {

  }
  public saveBrand(param : any){
    return this.http.post(bestUrl, param);

  }

  public getAllBrand(){
    return this.http.get<any[]>(bestUrl);
  }

}
