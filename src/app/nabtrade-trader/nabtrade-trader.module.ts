import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NabtradeTraderPageRoutingModule } from './nabtrade-trader-routing.module';

//import Nab Compontents
import { NabtradeTraderPage } from './nabtrade-trader.page';
import { OpenXlsxComponent } from './open-xlsx/open-xlsx.component';
import { InputComponent } from './input/input.component';
import { ProfitLossComponent } from './profit-loss/profit-loss.component';
import { AsxCodeComponent } from './asx-code/asx-code.component';
import {ShowTXDetailComponent} from './show-txdetail/show-txdetail.component'
import { PageHeaderComponent } from '../sharedcomponents/page-header/page-header.component';
import { PageFooterComponent } from '../sharedcomponents/page-footer/page-footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NabtradeTraderPageRoutingModule,
    
  ],
  declarations: [NabtradeTraderPage, OpenXlsxComponent, InputComponent, ProfitLossComponent, AsxCodeComponent, ShowTXDetailComponent, PageHeaderComponent, PageFooterComponent],
  exports: [OpenXlsxComponent, InputComponent, ProfitLossComponent, AsxCodeComponent, ShowTXDetailComponent]
})
export class NabtradeTraderPageModule {}
