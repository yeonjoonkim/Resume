import { Component, OnInit } from '@angular/core';
import { NabDataService } from '../service/nab-data.service';
import { NabService } from '../service/nab.service';

@Component({
  selector: 'asx-code',
  templateUrl: './asx-code.component.html',
  styleUrls: ['./asx-code.component.scss'],
})
export class AsxCodeComponent implements OnInit {

  asxcode: any;
  tax: any;
  selectedCode: any;
  changed: boolean = false;
  tx: any;
  constructor(private nabData: NabDataService, private nabService: NabService) { }


  ngOnInit() {
    this.getData();
  }

  getData(){
      this.nabData.code.subscribe(response => {
        this.asxcode =  response;
      });
      this.nabData.tax.subscribe(response => {
        this.tax = response;
      });
      this.nabData.transaction.subscribe(response => {
        this.tx = response;
      })
      
  }
  async codeChange(){
    this.nabData.setSelectedAsxCode(this.selectedCode);
    await this.nabService.getDetailTransaction(this.tx, this.selectedCode);
  }

}
