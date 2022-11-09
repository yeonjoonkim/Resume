import { Component, OnInit, ViewChild } from '@angular/core';
import {  IonContent, Platform } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  loadDone = false;
  backToTop = false;
  info  = {
    name: 'Yeon Joon Kim',
    position: 'Junior Software Developer',
  };
  selection = ['Experience', 'Education','Certification'];
  selected = this.selection[0];
  public experience = [
    {
      company: 'Prolist',
      position: 'Internship',
      role: 'Front End Developer',
      suburb: 'Portsmith, QLD',
      startDate: 'NOV 2021',
      endDate: 'JAN 2022',
      responsbilities: [
        'Improved and designed new layouts to achieve usability and performance objectives.',
        'Designed wireframes and prototypes based on goals and needs for organization.',
        'Brought mock-ups to life with Vue, HTML, CSS and JavaScript.',
        'Applied jQuery scripts for basic animation and end-user screen customization purposes.',
        'Integrated backend data services to expand available resources within software.',
        'Troubleshot, tested and remedied issues before software deployment.',
        'Defined and conducted design processes at all stages, including research, conceptualization, testing and implementation.'
      ],
      hastagSkills: [
        '#dotnet', '#angular', '#angularjs', '#api', '#javascript','#communication', '#agile'
      ]
    }
  ];
  constructor(private platform: Platform) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    setTimeout(_ => {
      this.loadDone = true;
    }, 500);
  }

  getScrollPos(pos: number) {
    if (pos > this.platform.height()) {
         this.backToTop = true;
    } else {
         this.backToTop = false;
    }
  }
  gotToTop() {
    this.content.scrollToTop(1000);
  }
}
