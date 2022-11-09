import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


interface Summary{};
interface Transaction{};
interface asxcode{};
interface PNL{};
interface Tax{};
interface DetailTX{};
@Injectable({
  providedIn: 'root'
})
export class NabDataService {
  private summaryService: BehaviorSubject<Summary[]> = new BehaviorSubject<Summary[]>([]);
  summary: Observable<Summary[]> = this.summaryService.asObservable();

  private transactionService: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>([]);
  transaction: Observable<Transaction[]> = this.transactionService.asObservable();

  private asxCodeService: BehaviorSubject<asxcode[]> = new BehaviorSubject<asxcode[]>([]);
  code: Observable<asxcode[]> = this.asxCodeService.asObservable();

  private nabTitleService: BehaviorSubject<any> = new BehaviorSubject<any>('Nab Stock Trading');
  title: Observable<any> = this.nabTitleService.asObservable();

  private durationService: BehaviorSubject<any> = new BehaviorSubject<any>('');
  duration: Observable<any> = this.durationService.asObservable();

  private taxService: BehaviorSubject<Tax[]> = new BehaviorSubject<Tax[]>([]);
  tax: Observable<Tax[]> = this.taxService.asObservable();

  private pnlService: BehaviorSubject<PNL[]> = new BehaviorSubject<PNL[]>([]);
  PNL: Observable<PNL[]> = this.pnlService.asObservable();

  private openService: BehaviorSubject<any> = new BehaviorSubject<any>(0);
  openning: Observable<any> = this.openService.asObservable();

  private expenseService: BehaviorSubject<any> = new BehaviorSubject<any>(0);
  expense: Observable<any> = this.expenseService.asObservable();

  private selectedAsxService: BehaviorSubject<any> = new BehaviorSubject<any>('');
  selectedASX: Observable<any> = this.selectedAsxService.asObservable();

  private DetailTxService: BehaviorSubject<DetailTX[]> = new BehaviorSubject<DetailTX[]>([]);
  detailTx: Observable<DetailTX[]> = this.DetailTxService.asObservable();

  constructor() { }

  setDetailTx(tx: any){
    this.DetailTxService.next(tx);
  }

  setSelectedAsxCode(asx: string){
    this.selectedAsxService.next(asx);
  }
    
  setDuration(duration: any){
    this.durationService.next(duration);
  }

  setTitle(title: any){
    this.nabTitleService.next(title);
  }

  setExpense(expense: number){
    this.expenseService.next(expense);
  }

  setSummary(summary: any){
    this.summaryService.next(summary);
  };

  setTax(tax: any){
    this.taxService.next(tax);
  };

  setOpenBalance(openning: any){
    this.openService.next(openning);
  }

  setTransaction(transaction: any){
    this.transactionService.next(transaction);
  };

  setAsxCode(code: any){
    this.asxCodeService.next(code);
  }

  setPNL(pnl: any){
    this.pnlService.next(pnl)
  }

}
