import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { GetApiService } from './get-api.service';
export interface Tool {
  stage: string;
  subsection: string;
  tools: string;
}

@Injectable({
  providedIn: "root"
})

export class SavedToolchainService {
  //stackChanged= new Subject<Tool[]>();
  constructor( private apiService: GetApiService) {}
  stack : Tool []= [];
  showButton: Boolean;

  addStack(tool:Tool){
    this.stack.push(tool);
   // this.stackChanged.next(this.stack.slice());
  }
  getStack(){
    return this.stack.slice();
  }
  getValue(){
    return this.stack;
  }
  getButton(){
    return this.showButton;
  }
  removeTool(tool: Tool){
    const deletestage= tool.stage;
    const index = this.stack.indexOf(tool, 0);
    if (index > -1) {
       this.stack.splice(index, 1);
      //  this.apiService.currentStage=index;
      //  this.apiService.currentSubCategory=index;

    }
  }
 
}
