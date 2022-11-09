import { Component, OnInit, ViewChild } from '@angular/core';
import {  IonContent, Platform } from '@ionic/angular';
import { Series, SeriesLabels, ValueAxis } from '@progress/kendo-angular-charts';
import { YeonJoonKimInfo } from '../interface/siteOwner/site.interface';
import { FirebaseRepositoryService } from '../services/firebase/firebase-repository.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  public loadDone = false;
  public backToTop = false;
  public info: YeonJoonKimInfo = {
    completed: 'Bachelor of IT',
    currentCompany: 'Otraco International Pty Ltd',
    currentPosition: 'Junior Software Developer (Full Time)',
    currentStudy: 'Master of IT (Part Time)',
    description: 'I am currently working at Otraco International Pty Ltd as a full-time junior developer since Feb 2022 and undertaking a Master of IT at Queensland of University online as part-time to explore new challenges.',
    name: 'Yeon Joon Kim',
    uid: ''
  };
  series: Series = {
    type: 'column',
    data: [70, 40, 80, 60, 50],
    stack: true,
    name: "Skill",
    color: "#6D7EAA",
    axis: "Rate"
  }
  axis: ValueAxis = {
    color: "#6D7EAA",
    min: 0,
    max: 100,
    name: "Rate"
  }
  showChartLegend = false;
  category = ['Angular', 'SQL', 'Typescript', '.Net', 'C#']
  public seriesLabels: SeriesLabels = {
    visible: true,
    padding: 3,
    font: "bold 15px Arial, sans-serif",
  };
  constructor(private platform: Platform, private fireRepo: FirebaseRepositoryService) {
    this.fireRepo.getYeonJoonKimData().then(result => {
      this.info = result;
    });
  }

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
