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
  constructor(private exchangesService:ExchangeService, private router:Router) {}

 ngOnInit(){
  this.exchangesService.getExchanges().subscribe(respuesta =>{
  this.exchanges = respuesta
  })

}
}
