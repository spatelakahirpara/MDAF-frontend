import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of, concat, BehaviorSubject, Subscription } from 'rxjs';

export interface Stage {
  stage: string;
}
export interface SubCategory {
  stage: string;
  route: string;
  subsection: string;
}
export interface Tool {
  stage: string;
  subsection: string;
  tools: string;
}
@Injectable({
  providedIn: 'root'
})
export class GetApiService implements OnDestroy {
  apiUrl: string;
  stagesState = false;
  stages: Stage[] = [];

  subcategoriesState = false;
  subcategories: SubCategory[] = [];
  // tslint:disable-next-line: new-parens
  subscription = new Subscription;

  toolsState = false;
  tools: Tool[][] = [];
  // tslint:disable-next-line: ban-types
  loadAccessData: String [] = [];

  currentStage = 0;
  currentSubCategory = 0;
  userName: String;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }
  setUserName(name: String) {
    this.userName = name;
  }
  getUserName() {
    return this.userName;
  }
  callRegisterApi(username, password) {
    const reqBody = {
      UserName: username,
      Password: password
   };
    return this.http.post<any[]>(this.apiUrl + 'register', reqBody);
  }
  callLoginApi(username, password) {
    const reqBody = {
      UserName: username,
      Password: password
   }
    return this.http.post<any[]>(this.apiUrl + 'login', reqBody);
  }

  callStackApi(username, stack) {
    const reqBody = {
      UserName: username,
      Stack: stack
   }
    return this.http.post<any[]>(this.apiUrl + 'review', reqBody);
  }

  callStagesApi() {
    return this.http.get<Stage[]>(this.apiUrl + 'toolchain');
  }

  callSubcategoriesApi(stage: String): Observable<Object> {

    if (stage === 'Preproduction') {
      return of([]);
    } else {
    return this.http.get<SubCategory[]>(this.apiUrl + stage);
    }
  }

  callToolsApi(stage: String, subcategoriesRoute: string): Observable<Object> {
    if (stage === 'Preproduction') {
      return of('work');
    } else {
      return this.http.get<Tool[]>(
        this.apiUrl + stage + '/' + subcategoriesRoute
      );
    }
  }
  public getAllData() {
    this.subscription.add(this.callStagesApi().subscribe(
      (next: any) => {

        this.stages = next;
        this.stagesState = true;

        this.callSubcategoriesApi(
          this.stages[this.currentStage].stage
        ).subscribe(
          (next: any) => {
            this.subcategories = next;
            this.subcategoriesState = true;
            this.tools = [];
            for (let i = 0; i < this.subcategories.length; i++) {
              const element = this.subcategories[i];
              this.callToolsApi(element.stage, element.route).subscribe(
                (next: any) => {
                  this.tools.push(next);
                  this.toolsState = true;
                },
                (error: any) => console.error(error)
              );
            }
          },
          (error: any) => console.error(error)
        );
      },
      (error: any) => console.error(error)
    ));
  }

  // public getStages() {
  //   this.stagesState = false;
  //   this.callStagesApi().subscribe(
  //     (next: any) => {
  //       this.stages = next;
  //       this.stagesState = true;
  //       console.log(this.stagesState);
  //     },
  //     (error: any) => console.error(error)
  //   );
  //   console.log(this.stagesState);
  // }

  // public getSubcategories() {
  //   console.log(this.stagesState);
  //   if (this.stagesState) {
  //     this.subcategoriesState = false;
  //     this.callSubcategoriesApi(this.stages[this.currentStage].stage).subscribe(
  //       (next: any) => {
  //         this.subcategories = next;
  //         this.subcategoriesState = true;
  //         console.log(this.stagesState);
  //       },
  //       (error: any) => console.error(error)
  //     );
  //   }
  // }

  // public getTools() {
  //   this.toolsState = false;
  //   this.tools = [];
  //   for (let i = 0; i < this.subcategories.length; i++) {
  //     const element = this.subcategories[i];
  //     this.callToolsApi(element.stage, element.route).subscribe(
  //       (next: any) => {
  //         this.tools.push(next);
  //         this.toolsState = true;
  //       },
  //       (error: any) => console.error(error)
  //     );
  //   }
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
