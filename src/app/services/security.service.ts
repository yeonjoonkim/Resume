import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccessInfo, IpAddress } from '../interface/security/security.interface';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { FirebaseRepositoryService } from './firebase-repository.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private readonly _ipInfoApi: string = "https://ipinfo.io/json?token=4115978389072a";
  private readonly _timeStamp: Date = new Date();

  constructor(private http: HttpClient, private deviceService: DeviceDetectorService, private fireRepo: FirebaseRepositoryService) { }

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
    }

    return userAccess;
  }

  /**get user access info and save in database*/
  public async getAccessInfo(){
    let ip: IpAddress = await this.getUserAccessIpAddress();
    let device: DeviceInfo = this.getUserDeviceInfo();
    let accessData: AccessInfo = this.setUserAccessData(ip, device);
    this.fireRepo.addUserAccessLog(accessData);
  }

}
