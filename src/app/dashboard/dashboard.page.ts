import { Component, OnInit, ViewChild } from '@angular/core';
import {  IonContent } from '@ionic/angular';
import { Series, SeriesLabels, ValueAxis } from '@progress/kendo-angular-charts';
import { YeonJoonKimInfo } from '../interface/siteOwner/site.interface';
import { FirebaseRepositoryService } from '../services/firebase/firebase-repository.service';
import { ModalController } from '@ionic/angular';
import { EducationComponent } from '../sharedcomponents/education/education.component';
import { WorkExperienceComponent } from '../sharedcomponents/work-experience/work-experience.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  public info: YeonJoonKimInfo = {
    completed: 'Bachelor of IT',
    currentCompany: 'Otraco International',
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
    name: "Rate",
    color: "#6D7EAA",
    axis: "Rate"
  }
  axis: ValueAxis = {
    color: "#6D7EAA",
    min: 0,
    max: 100,
    name: "Rate"
  }
  public seriesLabels = {
    visible: true,
    font: "bold 13px Arial, sans-serif", 
    format: "{0}%"
  };
  public categoryLabel = {
    visible: true,
    font: "bold 13px Arial, sans-serif",
  };
  public showChartLegend = true;
  public category = ['Angular', 'SQL', 'Typescript', 'Git', 'C#'];
  public loadDone = false;
  public backToTop = false;


  constructor(private fireRepo: FirebaseRepositoryService, private modalCtrl: ModalController) {
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
