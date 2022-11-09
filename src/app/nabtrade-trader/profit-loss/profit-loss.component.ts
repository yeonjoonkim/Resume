import { Component, OnInit } from '@angular/core';
import { NabDataService } from '../service/nab-data.service';

@Component({
  selector: 'profit-loss',
  templateUrl: './profit-loss.component.html',
  styleUrls: ['./profit-loss.component.scss'],
})
export class ProfitLossComponent implements OnInit {

  summary: any;
  asxcode: any;
  transaction: any;
  expense: any;
  overall: any;
  tax: any;
  duration: any;
  
  constructor(private nabData: NabDataService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
      this.nabData.summary.subscribe(response => {
        this.summary =  response;
      });

      this.nabData.code.subscribe(response => {
        this.asxcode =  response;
      });
      this.nabData.transaction.subscribe(response => {
        this.transaction =  response;
      });
      this.nabData.expense.subscribe(response =>{
        this.expense = response;
      });
      this.nabData.PNL.subscribe(response => {
        this.overall = response;
      });
      this.nabData.tax.subscribe(response => {
        this.tax = response;
      });
      this.nabData.duration.subscribe(response => {
        this.duration = response;
      });
  }
}
