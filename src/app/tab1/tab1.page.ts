import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../services/exchange.service';
import { Exchange } from '../interfaces/interfaces'
import { Router } from '@angular/router';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  component = Tab2Page
  exchanges: Exchange[] = []
  SearchNames: any;
  
  constructor(private exchangesService:ExchangeService, private router:Router) {}

  ngOnInit(){
    this.exchangesService.getExchanges().subscribe(respuesta =>{
    this.exchanges = respuesta;
    this.SearchNames = this.exchanges;
    })
  }
searchExchange(event:any){
  const text= event.target.value;
  
 this.SearchNames = this.exchanges
 if (text&& text.trim() !=''){
  this.SearchNames = this.SearchNames.filter((exchange: any)=>{
    return (exchange.name.toLowerCase().indexOf(text.toLowerCase())) > -1
  })
}

}
}

