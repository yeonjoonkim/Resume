import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

//Firebase Moudles
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import {AngularFireModule} from '@angular/fire/compat';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarcodesModule } from '@progress/kendo-angular-barcodes';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';







@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideAuth(() => getAuth()), 
    provideDatabase(() => getDatabase()), 
    provideFirestore(() => getFirestore()), 
    provideFunctions(() => getFunctions()), DateInputsModule, BrowserAnimationsModule, BarcodesModule, ChartsModule, ScrollViewModule],

  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
