import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/system/menu.service';
import { MenuComponent } from 'src/app/interface/menu/page.interface';
import { SiteOwner } from 'src/app/interface/siteOwner/site.interface';
import { SiteOwnerService } from 'src/app/services/system/site-owner.service';
import { ModalController } from '@ionic/angular';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { LogInComponent } from '../log-in/log-in.component';
import { AccessHistoryComponent } from '../access-history/access-history.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/security/auth.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})

export class PageHeaderComponent implements OnInit {
  public menu: MenuComponent;
  public owner: SiteOwner;
  public isAuth: boolean = false;

  constructor(private _menuService: MenuService, private _siteOwnerService: SiteOwnerService, private modalCtrl: ModalController,
    private afAuth: AngularFireAuth, private readonly _auth: AuthService) {
    this.menu = this._menuService.getPageComponent();
    this.owner = this._siteOwnerService.getSiteOwnerDetail();
    this.afAuth.user.subscribe(auth => {
      this.isAuth = (auth) ? true : false;
    });
  }

  ngOnInit() {

  }

  renderAuth(){

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
}
