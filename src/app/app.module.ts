import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

//Side Bar
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Ng2SearchPipeModule } from "ng2-search-filter";

//Firebase Moudles
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import {AngularFireModule} from '@angular/fire/compat';

//Kendo UI
import 'hammerjs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarcodesModule } from '@progress/kendo-angular-barcodes';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { InputsModule } from '@progress/kendo-angular-inputs';

//Import Shared Components
import { AccessHistoryComponent } from './sharedcomponents/access-history/access-history.component';
import { LogInComponent } from './sharedcomponents/log-in/log-in.component';
import { RegisterUserComponent } from './sharedcomponents/register-user/register-user.component';
import { PageHeaderComponent } from './sharedcomponents/page-header/page-header.component';
import { PageFooterComponent } from './sharedcomponents/page-footer/page-footer.component';
import { EducationComponent } from './sharedcomponents/education/education.component';
import { WorkExperienceComponent } from './sharedcomponents/work-experience/work-experience.component';


@NgModule({
  declarations: [
    AppComponent, 
    AccessHistoryComponent, 
    LogInComponent, 
    RegisterUserComponent, 
    PageHeaderComponent,
    PageFooterComponent,
    AccessHistoryComponent, 
      LogInComponent, 
      RegisterUserComponent, 
      PageHeaderComponent,
      PageFooterComponent,
      EducationComponent,
      WorkExperienceComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideAuth(() => getAuth()), 
    provideDatabase(() => getDatabase()), 
    provideFirestore(() => getFirestore()), 
    provideFunctions(() => getFunctions()), 
    DateInputsModule, 
    BrowserAnimationsModule, 
    BarcodesModule, 
    ChartsModule, 
    ScrollViewModule, 
    InputsModule,
    Ng2SearchPipeModule
    ],
    exports: [
      AccessHistoryComponent, 
      LogInComponent, 
      RegisterUserComponent, 
      PageHeaderComponent,
      PageFooterComponent,
      EducationComponent,
      WorkExperienceComponent,
      FormsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [
    Platform,
    StatusBar,
    SplashScreen,
    { 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
