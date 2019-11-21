import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }

   callAccessApi(gitValue,jenkinsValue){
    
    let reqBody={
      "Git":gitValue,
      "Jenkins":jenkinsValue
   } 
  
   return this.http.post<any[]>(this.apiUrl+"access",reqBody);
    
  }
} 
    