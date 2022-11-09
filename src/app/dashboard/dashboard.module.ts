import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { PageHeaderComponent } from '../sharedcomponents/page-header/page-header.component';
import { PageFooterComponent } from '../sharedcomponents/page-footer/page-footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    ChartsModule,
    
  ],
  declarations: [DashboardPage, PageHeaderComponent, PageFooterComponent],
  exports: []
})
export class DashboardPageModule {}
