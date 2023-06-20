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
  favArray: Exchange[] = [];
  
  ionViewWillEnter() {
    this.favArray = this.exchangesService.getFav()
  }

}
