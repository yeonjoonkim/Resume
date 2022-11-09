import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NabDataService } from '../service/nab-data.service';

@Component({
  selector: 'income-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})


export class InputComponent implements OnInit {
  @Output('ngModelChange') update = new EventEmitter();
  expense: number;
  openning: number;

  constructor(private nabData: NabDataService) { }

  ngOnInit() {
    this.openning = 174057.94;
    this.expense = 105000;
    this.nabData.setOpenBalance(this.openning);
    this.nabData.setExpense(this.expense);
  }
  changeOpenBal(newValue: string): void {
    let num = newValue.replace(/[$,]/g, "");
    let newValueNumber = parseFloat(num);
    this.openning = newValueNumber;
    this.nabData.setOpenBalance(this.openning);
  }

  changeExpense(newValue: string): void{
    let num = newValue.replace(/[$,]/g, "");
    let newValueNumber = parseFloat(num);
    this.expense = newValueNumber;
    this.nabData.setExpense(this.expense);
  }
}
