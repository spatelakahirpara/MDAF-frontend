import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';

export interface AccessData {
  ToolName: string;
  AccessParam: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccessPlatformService {
  //private _accessData = new BehaviorSubject<AccessData[]>([]);
  apiUrl: string;
  private accessArray: { accessData: AccessData[] } = { accessData: [] };
  
  //nameAgeMapping:Map;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }
  // callgetAccessApi():Observable<Map> {
    
  //   return this.http.get<Map>(this.apiUrl + "getAccess");
  // }
    
  callToolAccessApi(){
    return this.http.get<any>(this.apiUrl + "build");
    
  }

  
}
