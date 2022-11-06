export interface MenuComponent {
    pages: Array<PageMenuComponent>;
    linkedIn: LinkedInUrlComponent;
    gitHub: GitHubUrlComponent;
 } 

 export interface PageMenuComponent{
    title: string;
    url: string;
    icon: string;
 }

 export interface LinkedInUrlComponent{
    url: string ;
    icon: string;
    name: string;
 }

 export interface GitHubUrlComponent{
    url: string ;
    icon: string;
    name: string;
 }