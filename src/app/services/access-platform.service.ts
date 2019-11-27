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

  
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }
  callgetAccessApi():Observable<AccessData[]> {
    
    return this.http.get<AccessData[]>(this.apiUrl + "getAccess");
  }
    
  callToolAccessApi(){
    return this.http.get<any>(this.apiUrl + "build");
    
  }
  // get access(){
    
  //    this.callgetAccessApi().subscribe(
  //     (next: any) => {
  //     this.accessArray.accessData = next;
  //     //this._accessData.next(Object.assign({}, this.accessArray).accessData);
  //   });

  // }
  
}
//this.platform.push(item.tool,json);
            //  console.log(this.loadAccessData[j].tool);
             
            //   if(this.loadAccessData[j].tool=="Git"){
                
            //     for (var i = 0; i < json.length; i++) {
            //       console.log((json[i]));   
            //   }
            //   }
            //   else if(this.loadAccessData[j].tool=="Jenkins"){
           
            //     for (var i = 0; i < json.length; i++) {
            //       console.log((json[i]));   
            //   }
            //   }
            
        //  });