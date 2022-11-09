import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EducationService } from 'src/app/services/resume/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  education: any;
  constructor(private modalCtrl: ModalController, private educationService: EducationService) { }

  ngOnInit() {
    this.education = this.educationService.getList();
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
