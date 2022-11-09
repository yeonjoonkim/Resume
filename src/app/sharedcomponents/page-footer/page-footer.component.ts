import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/system/menu.service';
import { MenuComponent } from 'src/app/interface/menu/page.interface';
import { SiteOwner } from 'src/app/interface/siteOwner/site.interface';
import { SiteOwnerService } from 'src/app/services/system/site-owner.service';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss'],
})

export class PageFooterComponent implements OnInit {
  public menu: MenuComponent;
  public owner: SiteOwner;
  public isAuth: boolean = false;

  constructor(private _menuService: MenuService, private _siteOwnerService: SiteOwnerService) {
    this.menu = this._menuService.getPageComponent();
    this.owner = this._siteOwnerService.getSiteOwnerDetail();
  }

  ngOnInit() {}

}
