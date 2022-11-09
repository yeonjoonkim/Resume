import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NabtradeTraderPage } from './nabtrade-trader.page';

const routes: Routes = [
  {
    path: '',
    component: NabtradeTraderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NabtradeTraderPageRoutingModule {}
