import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exchange } from '../interfaces/interfaces'

 
@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  exchanges: Exchange[] = [];
  favArray: any[] = [];
  constructor(private http:HttpClient) { }

  getExchanges(){
    return this.http.get<Exchange[]>('https://api.coingecko.com/api/v3/exchanges?per_page=100')
  }

  getExchangesById(id: string){
    const url = `https://api.coingecko.com/api/v3/exchanges/${id}`
    return this.http.get(url)
  }

  addFav(favExchange: any){
    const exist = this.favArray.find((item: any) => {return item.name === favExchange.name})
    if(!exist){
      this.favArray.push(favExchange)
    }
  }

  getFav(){
    return this.favArray;
  }
}

