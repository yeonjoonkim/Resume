import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { SecurityService } from './services/security/security.service';
import { MenuService } from './services/system/menu.service';
import { MenuComponent } from './interface/menu/page.interface';
import { ModalController } from '@ionic/angular';
import { RegisterUserComponent } from '../app/sharedcomponents/register-user/register-user.component';
import { LogInComponent } from '../app/sharedcomponents/log-in/log-in.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public activePageTitle: string;
  public menu: MenuComponent;
  public activeIndex: number;
  public isAuth: boolean = false;

  constructor(
    private readonly _security: SecurityService, 
    private readonly _menuService: MenuService,     
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private modalCtrl: ModalController) {
      this.menu = this._menuService.getPageComponent();
      this.setDefaultPageActivePageTitle();
      this._security.getAccessInfo();
      this.initalizeMenu();
  }

  /** set first default page from MenuComponents */
  setDefaultPageActivePageTitle(){
    this.activePageTitle = this.menu.pages[0].title;
  }
  
  /** inital the menu bar */
  initalizeMenu(){
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async openUserRegister(){
    let register = await this.modalCtrl.create({
      component: RegisterUserComponent
    });

    register.present();
  }

  async openLogin(){
    let loginComponent = await this.modalCtrl.create({
      component: LogInComponent
    });

    loginComponent.present();
  }

  async openAccessHistoryView(){
    let loginComponent = await this.modalCtrl.create({
      component: LogInComponent
    });

    loginComponent.present();
  }

  async logOut(){
  }

}
