import { Component, OnInit } from '@angular/core';
import { NabDataService } from './service/nab-data.service';
import { TestService } from './service/test.service';

@Component({
  selector: 'app-nabtrade-trader',
  templateUrl: './nabtrade-trader.page.html',
  styleUrls: ['./nabtrade-trader.page.scss'],
})
export class NabtradeTraderPage implements OnInit {

  title: any;
  tax: any;
  constructor(private nabData: NabDataService, private test: TestService) { }

  ngOnInit() {
    this.getData();
    this.test.simulation();
  }

  getData(){
    this.nabData.title.subscribe(response => {
      this.title =  response;
    });
    this.nabData.tax.subscribe(Response => {
      this.tax = Response;
    })
  }

}
