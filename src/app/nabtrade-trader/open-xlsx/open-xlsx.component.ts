import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import * as XLSX from 'xlsx';
import { NabService } from '../service/nab.service';
import { NabDataService } from '../service/nab-data.service';
import { NabtradeSampleService } from 'src/app/services/nabtradeSampleData/nabtrade-sample.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'open-xlsx',
  templateUrl: './open-xlsx.component.html',
  styleUrls: ['./open-xlsx.component.scss'],
})
export class OpenXlsxComponent implements OnInit {
  @ViewChild('fileUploader') fileUploader:ElementRef;

  summary: [][];
  transaction: [][];
  holdings: [][];
  sum= {sell: 0, purchase: 0, brokerage: 0, other_fee: 0, closing: 0, share_pnl: 0};
  trans: any;
  code: any;
  openning: any;
  expense: any;

  constructor(private toastCtrl: ToastController,private investment: NabService, private nabData: NabDataService, private sample: NabtradeSampleService) {}

  ngOnInit() {
    this.getOpenning()
    this.getData()
  }

  async getData(){
    let sum = this.sample.getSampleSum();
    let code = this.sample.getSampleCode();
    let trans = this.sample.getSampleTrans();
    let pnl = this.sample.getSamplePNL();
    let duration = this.sample.getSampleDuration();
    let tax = this.sample.getSampleTax();
    this.showToast("Example is successfully loaded.")
    this.nabData.setDuration(duration);
    this.nabData.setTax(tax);
    this.nabData.setPNL(pnl)
    this.nabData.setAsxCode(code);
    this.nabData.setSummary(sum);
    this.nabData.setTransaction(trans);
  }

  async showToast(msg: any){
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle',
    });
    await toast.present();
  }
  
  getOpenning(){
     this.nabData.openning.subscribe(response => {
      this.openning = response;
    })
    this.nabData.expense.subscribe(response =>{
      this.expense = response;
    });
  }

  async onFileChange(evt: any){
    let openbal = 0;
    this.nabData.openning.subscribe(response => {
      openbal = response
    })
    //check if the file is multiple otherwise, throw the error and empty the value
    const target : DataTransfer = <DataTransfer>(evt.target);
    //create file reader
    const reader : FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
      const sum: XLSX.WorkSheet = wb.Sheets['Summary'];
      const trans: XLSX.WorkSheet = wb.Sheets['Domestic Portfolio Transactions'];
      const domesticHoldings: XLSX.WorkSheet = wb.Sheets['Domestic Holdings'];
      this.summary = (XLSX.utils.sheet_to_json(sum, {header: 1}));
      this.transaction = (XLSX.utils.sheet_to_json(trans, {header: 1}));
      this.holdings = (XLSX.utils.sheet_to_json(domesticHoldings, {header: 1}));
      this.sum = this.investment.getSummary(this.summary, this.transaction, openbal);
      this.code = this.investment.getASXCode(this.transaction);
      this.trans = this.investment.getTransactionInfo(this.transaction);
      this.investment.setOverallPnL(this.sum, this.expense);

      this.nabData.setAsxCode(this.code);
      this.nabData.setSummary(this.sum);
      this.nabData.setTransaction(this.trans);
    }
    reader.readAsBinaryString(target.files[0]);
  } 

}