import { Injectable } from '@angular/core';
import { SiteOwner } from '../../interface/siteOwner/site.interface';
@Injectable({
  providedIn: 'root'
})
export class SiteOwnerService {
  private readonly _siteOwner: SiteOwner = {
    phone: '+61 439 007 010',
    phoneUrl: '+61439007010',
    email: 'yeonjoon.developer@gmail.com',
    abnNumber: '13 274 577 857',
    abnUrl: 'https://abr.business.gov.au/ABN/View?id=13274577857',
    copyRight: 'Copyright 2022 Yeon Joon Kim',
    description: '',

  }
  constructor() { }

  /** return siteOwner Details */
  getSiteOwnerDetail(){
    return this._siteOwner;
  }

}
