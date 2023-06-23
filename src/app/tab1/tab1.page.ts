import { Component, OnInit,ViewChild } from '@angular/core';
import { ExchangeService } from '../services/exchange.service';
import { Exchange } from '../interfaces/interfaces'
import { ActivatedRoute, Router } from '@angular/router';
import { Tab2Page } from '../tab2/tab2.page';
import { IonInfiniteScroll , MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  component = Tab2Page
  exchanges: Exchange[] = []
  searchNames:any;
  selectedFilter:string='trust-score-rank';
  filteredExchange: Exchange[] = [];
  favExchange: any;
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;
  numero: number=20

  constructor(private exchangesService:ExchangeService, private router:Router,  private route: ActivatedRoute,private menuCtrl:MenuController) {}

  ngOnInit(){
    this.exchangesService.getExchanges().subscribe(respuesta =>{
      this.exchanges = respuesta;
      this.searchNames = this.exchanges;
    })
  }
  searchExchange(event:any){
    const text= event.target.value;
    if (text && text.trim() !=''){
      this.searchNames = [...this.exchanges]
      this.searchNames = this.searchNames.filter((exchange: any)=>{
        return (exchange.name.toLowerCase().indexOf(text.toLowerCase())) > -1
      })
    }
  }
  filterExchange(){
    if(this.selectedFilter==='trust-score-rank'){
      this.searchNames = this.exchanges.sort((a,b) => {
        if(a.trust_score_rank < b.trust_score_rank){
          return -1;
        }else if(a.trust_score_rank > b.trust_score_rank){
          return 1;
        }else{
          return 0;
        }
      })
    }else if(this.selectedFilter==='a-z'){
      this.searchNames = this.exchanges.sort((a, b) => {
        if(a.name < b.name) {
          return -1;
        }else if(a.name > b.name) {
          return 1;
        }else{
          return 0;
        }
      });
    }
  }
  addExchangeFav(id: string){
    if(id){
      this.exchangesService.getExchangesById(id).subscribe(respuesta => {
        this.favExchange = respuesta
        this.exchangesService.addFav(this.favExchange)
      })
    }
  }
  loadData(event:any){
    setTimeout(() => {
      if(this.numero < this.exchanges.length){
        this.numero+=10; 
        event.target.complete();
        console.log(this.numero)
      }else{
        this.infiniteScroll.disabled=true;
      }
    }, 1000);
  }

}