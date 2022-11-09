import { Injectable } from '@angular/core';
import { NabDataService } from './nab-data.service';

@Injectable({
  providedIn: 'root'
})
export class IndividualTaxService {

  constructor(private nabData: NabDataService) {}

  setIndiviualTax(income: any, closing: any){
    const tax = {rate: 0, payment: 0, turn: true, net: 0}
    if(18201 >= income){
      tax.rate = 0;
      tax.payment = 0;
    }
    else if(45000 >= income){
      tax.rate = 0.19;
      tax.payment = ((income - 18200) * 0.19)
    } 
    else if(120000 >= income){
      tax.rate = 0.325;
      tax.payment = ((income - 45000) * 0.325) + 5092
    } 
    else if(180000 >= income){
      tax.rate = 0.37;
      tax.payment = ((income - 120000) * 0.37) + 29467
    } else{
      tax.rate = 0.45;
      tax.payment = ((income - 180000) * 0.45) + 51667
    }

    tax.net = closing - tax.payment;

    this.nabData.setTax(tax);
  }

  getIndiviualTax(income: any, closing: any){
    const tax = {rate: 0, payment: 0, turn: true, net: 0}
    if(18201 >= income){
      tax.rate = 0;
      tax.payment = 0;
    }
    else if(45000 >= income){
      tax.rate = 0.19;
      tax.payment = ((income - 18200) * 0.19)
    } 
    else if(120000 >= income){
      tax.rate = 0.325;
      tax.payment = ((income - 45000) * 0.325) + 5092
    } 
    else if(180000 >= income){
      tax.rate = 0.37;
      tax.payment = ((income - 120000) * 0.37) + 29467
    } else{
      tax.rate = 0.45;
      tax.payment = ((income - 180000) * 0.45) + 51667
    }

    tax.net = closing - tax.payment;

    return tax
  }
}
