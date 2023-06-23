import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExchangeService } from '../services/exchange.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  data: any; // Variable para almacenar los datos del exchange

  constructor(
    private route: ActivatedRoute,
    private exchangesService: ExchangeService
  ) {}

  ngOnInit() {
    // Metodo que se ejecuta al iniciar el componente
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        // Se obtiene el ID del exchange desde la URL
        this.exchangesService.getExchangesById(id).subscribe(respuesta => {
          // Se obtienen los datos del exchange a través del servicio ExchangeService
          this.data = respuesta;
        });
      }
    });
  }
}

