import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, Subscription } from 'rxjs';
// export interface Questions {
//   question: string;
// }
// export interface QuestionTools {
//   toolName: string;
//   question: string;
// }
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  callApiTool(id) :Observable<Object>{
    let requestBody=
    {
      "questionId": id
    }
    return this.http.post<any[]>(this.apiUrl + "tool",requestBody);
  }
  
  apiUrl: string;
  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  callApiQuestions():Observable<Object>{
    return this.http.get<any[]>(this.apiUrl + "questions");
  }
  callApiQuestionTools():Observable<Object>{
    return this.http.get<any[]>(this.apiUrl + "tools");
  }
  callApiParams() :Observable<Object>{
    return this.http.get<any[]>(this.apiUrl + "params");
  }
  callApiPlb():Observable<Object>{
    return this.http.get<any[]>(this.apiUrl + "buildPLB");
  }
 
  // getQuestions(){
  // this.callApiQuestions().subscribe(
  //     (next: any) => {
  //       console.log("got"+next);

  //     });
    
  // }

  
}
