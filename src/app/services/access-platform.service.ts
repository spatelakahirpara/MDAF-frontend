import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AccessPlatformService {
  apiUrl: string;
  constructor() { }

  // callToolAccessApi(){
  //   return this.http.get<String[]>(this.apiUrl + "build");
  // }
  // accessData(){
    
  //   this.callToolAccessApi().subscribe(data =>{
  //     this.loadAccessData = data;
  //     console.log("data we got"+this.loadAccessData);
  //   })
  //   return null;
    
  // }
}
