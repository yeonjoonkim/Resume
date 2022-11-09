import { Injectable } from '@angular/core';
import { NabDataService } from './nab-data.service';
import { IndividualTaxService } from './individual-tax.service';

@Injectable({
  providedIn: 'root'
})
export class NabService {

  constructor(private nabData: NabDataService, private taxService: IndividualTaxService) { }

  cleanData(summary: any, transaction: any, openbal: any){
    const domestic = this.getDoemsticHolding(summary);
    const trans = this.getTransactionInfo(transaction);
    const overall = this.getOverall(trans, domestic, openbal);
    const code = this.findCode(trans);
  };

  getSummary(summary: any, transaction: any, openbal: any){
    const domestic = this.getDoemsticHolding(summary);
    const trans = this.getTransactionInfo(transaction);
    const overall = this.getOverall(trans, domestic, openbal);
    return overall;
  }

  async setOverallPnL(overall: any, expense: any){
    const sharePnl = overall.share_pnl;
    const closing = overall.closing;
    const totalPnl = sharePnl - expense;
    const overallPNL = { totalPnl: totalPnl, expense: expense}
    this.nabData.setPNL(overallPNL);
    this.taxService.setIndiviualTax(totalPnl, closing);
  }


  
  getASXCode(transaction: any){
    const trans = this.getTransactionInfo(transaction);
    const code = this.findCode(trans)
    return code;
  }

  findCode(trans: any){
    const code = [];
    trans.forEach(action => {
      if(!code.includes(action.code)){
        if(action.code != undefined){
          code.push(action.code)
        }
      }
    });
    return code.sort();
  };

  getOverall(trans: any, closing: any, openbal: any){
    let sell = 0;
    let purchase = 0;
    let brokerage = 0;
    let other_fee = 0;
    for(let i = 2; i < trans.length; i++){
      if(trans[i].movement_type == 'SELL'){
        sell -= trans[i].settlement;
      }
      if(trans[i].movement_type == 'BUY'){
        purchase += trans[i].settlement;
      }
      brokerage += trans[i].brokerage;
      other_fee += trans[i].other_fee;
    }
    const sharepnl = sell - purchase - brokerage - other_fee - openbal + closing
  
    return {sell: sell, purchase: purchase, brokerage: brokerage, other_fee: other_fee, closing, opening: openbal, share_pnl: sharepnl}
  }

  //todo

  getTransactionInfo(transaction: any){
    const trans = [];
    this.nabData.setTitle(transaction[0][0]);
    this.nabData.setDuration(transaction[0][1]);
      for (let i = 2; i < transaction.length; i++){
        if(transaction[i].length == 15){
        trans.push({
          account : transaction[i][0], 
          description: transaction[i][1],
          code: transaction[i][2],
          date: new Date(Math.round((transaction[i][3] - 25569)*86400*1000)),
          movement_type: transaction[i][4],
          confirmation_no: transaction[i][5],
          currency: transaction[i][6],
          transaction_price: transaction[i][7],
          quantity: transaction[i][8],
          value: transaction[i][9],
          brokerage: transaction[i][10],
          other_fee: transaction[i][11],
          avg_price: transaction[i][12],
          multiplier: transaction[i][13],
          settlement: transaction[i][14],
        })
      }
    }
    return trans;
  };

  async getDetailTransaction(tx: any, selectedAsx: any){
    const detailTx = [];
    const prevData = this.getPreviousData();
    if(selectedAsx === 'SYA.ASX'){
      for(let i = 0; i < prevData.length; i++){
        detailTx.push(prevData[i]);
    }
   }
    for(let i = 0; i < tx.length; i++){
      let asxcode = tx[i].code;
      if(asxcode === selectedAsx){
        detailTx.push(tx[i])
      }
    }
    detailTx.sort((x, y) => +new Date(x.createdAt) - +new Date(y.createdAt));
    this.nabData.setDetailTx(detailTx);
  }

  getDoemsticHolding(summary: any){
    for(let i = 0; i < summary.length; i++){
      if (summary[i].length > 1 && summary[i] !== undefined && summary[i][0] === 'Domestic holdings'){
        let value = summary[i][summary[i].length-1];
        return value
      }
    }
  }

  getPreviousData(){
    const prevData =[
      {
        account : 'Trading Account - cash funded (NT2498348-004)',
        description: 'SAYONA MINING LIMITED ORDINARY FULLY PAID',
        code: 'SYA.ASX',
        date: new Date(Math.round((44349 - 25569)*86400*1000)),
        movement_type: 'BUY',
        transaction_price: 0.0480,
        quantity: 1040521,
        value: 49945.01,
        brokerage: 49.95,
        other_fee: 5.00,
        avg_price: 0.048052812,
        settlement: 49999.96
      },
      {
        account : 'Trading Account - cash funded (NT2498348-004)',
        description: 'SAYONA MINING LIMITED ORDINARY FULLY PAID',
        code: 'SYA.ASX',
        date: new Date(Math.round((44351 - 25569)*86400*1000)),
        movement_type: 'BUY',
        transaction_price: '0.0550',
        quantity: 267500,
        value: 14712.5,
        brokerage: 18.14,
        other_fee: 1.81,
        avg_price: 0.055074579,
        settlement: 14732.45
      },
      {
        account : 'Trading Account - cash funded (NT2498348-004)',
        description: 'SAYONA MINING LIMITED ORDINARY FULLY PAID',
        code: 'SYA.ASX',
        date: new Date(Math.round((44355 - 25569)*86400*1000)),
        movement_type: 'BUY',
        transaction_price: '0.062',
        quantity: 38468,
        value: 2385.02,
        brokerage: 13.59,
        other_fee: 1.36,
        avg_price: 0.062388739,
        settlement: 2399.97
      },
      {
        account : 'Trading Account - cash funded (NT2498348-004)',
        description: 'SAYONA MINING LIMITED ORDINARY FULLY PAID',
        code: 'SYA.ASX',
        date: new Date(Math.round((44355 - 25569)*86400*1000)),
        movement_type: 'BUY',
        transaction_price: '0.062',
        quantity: 654177,
        value: 38412.21,
        brokerage: 47.95,
        other_fee: 4.8,
        avg_price: 0.062068205,
        settlement: 47999.95
      },
    ]
    return prevData;
  }
}
