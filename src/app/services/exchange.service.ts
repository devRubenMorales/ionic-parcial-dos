import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exchange } from '../interfaces/interfaces'

 
@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  exchanges: Exchange[] = []; // Arreglo de exchange
  favArray: any[] = []; // Arreglo de exchange favoritos
  constructor(private http:HttpClient) { }

  getExchanges(){
      // Metodo para obtener los exchange
    return this.http.get<Exchange[]>('https://api.coingecko.com/api/v3/exchanges')
  }

  getExchangesById(id: string){
     // Metodo para obtener un exchange por su ID
    const url = `https://api.coingecko.com/api/v3/exchanges/${id}`
    return this.http.get(url)
  }

  addFav(favExchange: any){
    // Metodo para agregar un exchange favorito
    const exist = this.favArray.find((item: any) => {return item.name === favExchange.name})
    if(!exist){
      this.favArray.push(favExchange)
    }
  }

  getFav(){
     // Metodo para obtener los exchange favoritos
    return this.favArray;
  }
}

