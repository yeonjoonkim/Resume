import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { SecurityService } from './services/security/security.service';
import { MenuService } from './services/system/menu.service';
import { MenuComponent } from './interface/menu/page.interface';
import { ModalController } from '@ionic/angular';
import { RegisterUserComponent } from '../app/sharedcomponents/register-user/register-user.component';
import { LogInComponent } from '../app/sharedcomponents/log-in/log-in.component';
import { AccessHistoryComponent } from './sharedcomponents/access-history/access-history.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './services/security/auth.service';
import { UserRegisterForm } from './interface/forms/forms.interface';
import { EducationComponent } from './sharedcomponents/education/education.component';
import { WorkExperienceComponent } from './sharedcomponents/work-experience/work-experience.component';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  implements OnInit {
  public activePageTitle: string;
  public menu: MenuComponent;
  public activeIndex: number;
  public isAuth: boolean = false;
  public userProfile: UserRegisterForm;
  public isRender: boolean = false;

  constructor(
    private readonly _security: SecurityService,
    private readonly _auth: AuthService,
    private readonly _menuService: MenuService,     
    private afAuth: AngularFireAuth,
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private modalCtrl: ModalController) {
      this.menu = this._menuService.getPageComponent();
      this.setDefaultPageActivePageTitle();
      this._security.getAccessInfo();
      this.initalizeMenu();
      this.afAuth.user.subscribe(auth => {
        this.isAuth = (auth) ? true : false;
      });
      this._auth.userProfile.subscribe(user => {
        return user;
      });
  }

  ngOnInit() {
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
      component: AccessHistoryComponent
    });

    loginComponent.present();
  }

  async logOut(){
    this._auth.logout();
  }

  async openWorkExperience(){
    let workExperienceComponent = await this.modalCtrl.create({
      component: WorkExperienceComponent
    });

    workExperienceComponent.present();
  }

  async openEducation(){
    let educationComponent = await this.modalCtrl.create({
        component: EducationComponent
      });
  
      educationComponent.present();
    }

}
