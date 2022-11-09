import { Component, OnInit } from '@angular/core';
import { NabDataService } from '../service/nab-data.service';

@Component({
  selector: 'transaction-detail',
  templateUrl: './show-txdetail.component.html',
  styleUrls: ['./show-txdetail.component.scss'],
})
export class ShowTXDetailComponent implements OnInit {
  detail: any;
  segmentValue = [
    {text: 'Purchase', value: 'BUY'},
    {text: 'SOLD', value: 'SELL'}
  ];
  selectedSegment: string;
  tax: any;
  constructor(private nabData:NabDataService) { }

  ngOnInit() {
    this.getData();
    this.selectedSegment = 'BUY';
  }

  getData(){
    this.nabData.detailTx.subscribe(Response => {
      this.detail = Response;
    })
    this.nabData.tax.subscribe(Response => {
      this.tax = Response;
    })
  }
}
