import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/system/menu.service';
import { MenuComponent } from 'src/app/interface/menu/page.interface';
import { SiteOwner } from 'src/app/interface/siteOwner/site.interface';
import { SiteOwnerService } from 'src/app/services/system/site-owner.service';
import { EducationComponent } from '../../sharedcomponents/education/education.component';
import { WorkExperienceComponent } from '../../sharedcomponents/work-experience/work-experience.component';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss'],
})

export class PageFooterComponent implements OnInit {
  public menu: MenuComponent;
  public owner: SiteOwner;
  public isAuth: boolean = false;

  constructor(private _menuService: MenuService, private _siteOwnerService: SiteOwnerService, private modalCtrl: ModalController) {
    this.menu = this._menuService.getPageComponent();
    this.owner = this._siteOwnerService.getSiteOwnerDetail();
  }

  ngOnInit() {}

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
