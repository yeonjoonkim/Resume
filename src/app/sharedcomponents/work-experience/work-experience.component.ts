import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExperienceService } from '../../services/resume/experience.service';
@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit {
  experience: any;
  constructor(private modalCtrl: ModalController, private experienceService: ExperienceService ) { }

  ngOnInit() {
    this.experience = this.experienceService.getList();
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
