import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { GetApiService } from './get-api.service';
export interface Tool {
  stage: string;
  subsection: string;
  tools: string;
}
export interface hashMap{
  [stage:string]: number;
}

@Injectable({
  providedIn: "root"
})

export class SavedToolchainService {
  //stackChanged= new Subject<Tool[]>();
  constructor( private apiService: GetApiService) {}
  stack : Tool []= [];
  showButton: Boolean;
  fillTool: Boolean = false;
  errMap: hashMap={};
  addStack(tool:Tool){ 
    this.stack.push(tool); 
    // if(!this.errMap.has(tool.stage)){
    //   this.errMap[tool.stage]=1;
    // }
    // else{
    //   var count= this.errMap[tool.stage];
    //   this.errMap[tool.stage]= count+1;
    // }
    
   // this.stackChanged.next(this.stack.slice());
  }
  saveToolChainApi(){
    console.log("getStack"+this.getStack);
    this.apiService.callStackApi(this.apiService.getUserName(),this.getStack() ).subscribe((res:any)=>{
      if(res.StatusCode==200){
      // this.username= res.body.UserName;
      // console.log(res.body.UserName);
      //   this.loginService.setUserName(res.body.UserName);
      //   this.router.navigate(['../selectTools']);

      }
      else{
        console.log("error")
      }
      console.log("submitted the data"+ res);
    });
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
  getMap(){
    return this.errMap;
  }
  removeTool(tool: Tool){
    
    const index = this.stack.indexOf(tool, 0);
    if (index > -1) {
       this.stack.splice(index, 1);
    }
    // if(this.errMap.has(tool.stage)){

    // }
    // this.errMap.delete(tool.stage);
    // this.errMap.set(tool.stage,false);
    // console.log("new stage"+ this.errMap.get(tool.stage));
  }
  // checkTool(tool:Tool){
  //   const deletedstage= tool.stage;
  //   var BreakException = {};

  //   try {
  //     this.stack.forEach(function(el) {
  //       console.log("current stage:" + el.stage);
  //       console.log("deleted stage:" + deletedstage);
  //       if (el.stage === deletedstage) throw BreakException;
        
  //     });
  //   } catch (e) {
  //     if (e !== BreakException) throw e;
  //     console.log("same stage");

  //     return true;
      
  //   }
  //   return false;
  // }
  


 
}
