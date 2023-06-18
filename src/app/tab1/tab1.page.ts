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
  selectedFilter:string='trust-score-rank';
  filteredExchange:any;

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
filterExchange(){
  if(this.selectedFilter==='trust-score-rank'){
    this.SearchNames = this.exchanges.sort((a,b) => {
      if (a.trust_score_rank < b.trust_score_rank){
        return -1;
      }else if (a.trust_score_rank > b.trust_score_rank){
        return 1;
      }else{
        return 0;
      }
    })
  }else if(this.selectedFilter==='a-z'){
    this.SearchNames = this.exchanges.sort((a, b) => {
      // Ordenar alfabéticamente por nombre
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
}