import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  

  simulation(){
    let emptyItem = [];
    let openBal = 174057.94;
    let totalSold = 2241943.05;
    let totalPurchase = 2120183.45;
    let brokerage = 494.01;
    let otherIncome = 11880.75 + 11982.53
    let closingList = [400000, 500000, 600000, 700000, 800000, 900000, 1000000]
    let expenseList = [50000, 100000, 205000, 300000, 400000, 500000, 600000]
    closingList.forEach(closing => {
      expenseList.forEach(expense =>{
        let income = totalSold - totalPurchase - brokerage - openBal - expense + closing + otherIncome;
        let taxRate = this.getTaxRate(income);
        let taxPayment = this.getIndiviualTax(income, taxRate);
        let item = {
          openingBalance: openBal,
          closingBalance: closing,
          totalSold: totalSold,
          totalPurchase: totalPurchase,
          expense: expense + brokerage,
          totalIncome: income + otherIncome,
          taxRate: taxRate,
          taxPayment
        }
        emptyItem.push(item);
      });
    });
    //console.log(JSON.stringify(emptyItem))
  }

  getTaxRate(income: any){
    let rate = 0;

      if(18201 >= income){
        rate = 0;
      }
      else if(45000 >= income){
        rate = 0.19;
      } 
      else if(120000 >= income){
        rate = 0.325;
      } 
      else if(180000 >= income){
        rate = 0.37;
      } else{
        rate = 0.45;
      }
      return rate;
  }

  getIndiviualTax(income: any, rate: any){
    let taxPayment = 0;
    if(18201 >= income){
      taxPayment;
    }
    else if(45000 >= income){
      taxPayment = ((income - 18200) * rate)
    } 
    else if(120000 >= income){
      taxPayment = ((income - 45000) * rate) + 5092
    } 
    else if(180000 >= income){
      taxPayment = ((income - 120000) * rate) + 29467
    } else{
      taxPayment = ((income - 180000) * rate) + 51667
    }
    return taxPayment
  }
}
