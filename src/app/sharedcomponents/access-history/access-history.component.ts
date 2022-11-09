import { Component, OnInit } from '@angular/core';
import { AccessInfo } from 'src/app/interface/security/security.interface';
import { FirebaseRepositoryService } from 'src/app/services/firebase/firebase-repository.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-access-history',
  templateUrl: './access-history.component.html',
  styleUrls: ['./access-history.component.scss'],
})
export class AccessHistoryComponent implements OnInit {
  public historyResult: AccessInfo[][];
  public searchQuery: any;

  constructor(private fireRepo: FirebaseRepositoryService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.fireRepo.getAccessHistory().then(historyResult => {
      this.historyResult = historyResult;
    });
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  

}
