import { Component} from '@angular/core';
import { ExchangeService } from '../services/exchange.service';
import { Exchange } from '../interfaces/interfaces';
import { Tab2Page } from '../tab2/tab2.page';



@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page{
  component = Tab2Page
  constructor(private exchangesService:ExchangeService) { }
  favArray: Exchange[] = []; // Arreglo de exchange favoritos
  
  ionViewWillEnter() {
     // Metodo que se ejecuta antes de que la pagina se muestre
    this.favArray = this.exchangesService.getFav() // Obtiene los intercambios favoritos del servicio ExchangeService
  }

}
