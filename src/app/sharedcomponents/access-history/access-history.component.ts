import { Component, OnInit } from '@angular/core';
import { AccessInfo } from 'src/app/interface/security/security.interface';
import { FirebaseRepositoryService } from 'src/app/services/firebase/firebase-repository.service';
@Component({
  selector: 'app-access-history',
  templateUrl: './access-history.component.html',
  styleUrls: ['./access-history.component.scss'],
})
export class AccessHistoryComponent implements OnInit {
  public historyResult: AccessInfo[][];
  constructor(private fireRepo: FirebaseRepositoryService) { }

  ngOnInit() {
    this.fireRepo.getAccessHistory().then(historyResult => {
      this.historyResult = historyResult;
      console.log(this.historyResult)
    });
  }

}
