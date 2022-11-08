import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccessInfo, IpAddress } from '../../interface/security/security.interface';
import { FirebaseRepositoryService } from '../firebase/firebase-repository.service';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SecurityService {
  private readonly _ipInfoApi: string = "https://ipinfo.io/json?token=4115978389072a";
  private readonly _timeStamp: Date = new Date();
  private readonly _timeStampStringDate = this._timeStamp.toISOString().slice(0,10)
  private readonly _timeStampStringTime = this._timeStamp.getHours() + ":" + this._timeStamp.getMinutes() + ":"+this._timeStamp.getSeconds();
  private readonly _defaultUserAccess: AccessInfo = {
    ip: '', city: '', region: '', postal: '', timezone: '', device: '',
    deviceType: '', browser: '', os: '', userAgent: '', timestamp: this._timeStamp, date: this._timeStampStringDate, time: this._timeStampStringTime
  };
  private userAccessService: BehaviorSubject<AccessInfo> = new BehaviorSubject<AccessInfo>(this._defaultUserAccess);
  userAccess: Observable<AccessInfo> = this.userAccessService.asObservable();


  constructor(private http: HttpClient, private deviceService: DeviceDetectorService, private fireRepo: FirebaseRepositoryService) {}

  /**Return set of IpAdress interface of Ip address, region, city, postal, and timzone*/
  private async getUserAccessIpAddress(){
    let ipInfo: IpAddress = await this.http.get<IpAddress>(this._ipInfoApi).toPromise();
    return ipInfo;
  }

  /**Return device information */
  private getUserDeviceInfo(){
    return this.deviceService.getDeviceInfo();
  }

  /** Return UserAccessInfo by using Ip and device.
   * @ip: dataset of IpAddress by using getUserAccessIpaddress()
   * @device: dataset of DeviceInfo by using getUserDeviceInfo()
  */
  private setUserAccessData(ip: IpAddress, device: DeviceInfo){
    let userAccess: AccessInfo = {
      ip: ip.ip,
      city: ip.city,
      region: ip.region,
      postal: ip.postal,
      timezone: ip.timezone,
      device: device.device,
      deviceType: device.deviceType,
      browser: device.browser,
      os: device.os,
      userAgent: device.userAgent,
      timestamp: this._timeStamp,
      date: this._timeStampStringDate, 
      time: this._timeStampStringTime
    }

    return userAccess;
  }

  /**get user access info and save in database*/
  public async getAccessInfo(){
    let ip: IpAddress = await this.getUserAccessIpAddress();
    let device: DeviceInfo = this.getUserDeviceInfo();
    let accessData: AccessInfo = this.setUserAccessData(ip, device);
    this.userAccessService.next(accessData);
    this.fireRepo.addUserAccessLog(accessData);
  }

  public getUserAccessInfo(){
    let accessInfo: AccessInfo;
    this.userAccess.subscribe(data => {
      accessInfo = data;
    });

    return accessInfo;
  }

}
