import { Injectable } from '@angular/core';
import { GitHubUrlComponent, LinkedInUrlComponent, PageMenuComponent, MenuComponent } from '../../interface/menu/page.interface';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly _menuComponents: Array<PageMenuComponent> = [
    {title: 'About', url: '/dashboard', icon: 'person-circle-outline'},
    {title: 'Resume', url: '/resume', icon: 'document-text-outline'}
  ];
  private readonly _linkedIn: LinkedInUrlComponent = {url: 'https://www.linkedin.com/in/yeonjoon-kim', icon: 'logo-linkedin', name: 'LinkedIn'};
  private readonly _gitHub: GitHubUrlComponent = {url: 'https://github.com/yeonjoonkim/', icon: 'logo-github', name: 'GitHub'};
  constructor() {

  }

  /**Set Menu Components*/
  private setPageComponents(){
    let page: MenuComponent = {
      pages: this._menuComponents, 
      gitHub: this._gitHub, 
      linkedIn: this._linkedIn};
    return page;
  }
  /** return Menu Components by using setPageComponents()*/
  public getPageComponent(){
    return this.setPageComponents();
  }

  
}
