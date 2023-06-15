import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exchange } from '../interfaces/interfaces'

 
@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  constructor(private http:HttpClient) { }

  getExchanges(){
    return this.http.get<Exchange[]>('https://api.coingecko.com/api/v3/exchanges?per_page=20')
  }

  getExchangesById(id: string){
    const url = `https://api.coingecko.com/api/v3/exchanges/${id}`
    return this.http.get(url)
  }
}
