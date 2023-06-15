import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExchangeService } from '../services/exchange.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  data: any;

  constructor(
    private route: ActivatedRoute,
    private exchangesService: ExchangeService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.exchangesService.getExchangesById(id).subscribe(respuesta => {
          this.data = respuesta;
        });
      }
    });
  }
}

