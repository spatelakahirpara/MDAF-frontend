import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import {  QuestionService } from '../services/question.service';
export interface QuestionTools {
    ToolName: string;
    Question: string;
  }
  export interface ToolParams {
    Question:string;
    ToolName: string;
    ParamName: string;
  }
@Component({
  selector: 'app-select-build',
  templateUrl: './select-build.component.html',
  styleUrls: ['./select-build.component.css']
})

export class SelectBuildComponent implements OnInit {
  questions:String[]=[];
  tools:QuestionTools[]=[];
  params: ToolParams[]=[];
  selectedToolObj="";
  inputParams:ToolParams[]=[];
  containerFlag=false;
  noValueContainer=false;
  plbData:any;
  InputForm = new FormGroup({ 
    enterInput: new FormControl('',Validators.required),
    paramValue: new FormControl('', Validators.required)
  });
  
  constructor(private questionService: QuestionService,private formBuilder: FormBuilder){

  }
  ngOnInit(){
    this.questionService.callApiQuestions().subscribe(
      (data: any) => {
        this.questions= data;
       // console.log(this.questions);
      });
      this.questionService.callApiQuestionTools().subscribe(
        (data: any) => {
          this.tools= data;
          //console.log(this.tools);
        });
        this.questionService.callApiParams().subscribe(
          (data: any) => {
            this.params= data;
          });
  }
  callPLB(){
    this.questionService.callApiPlb().subscribe(
      (data:any)=>{
        this.plbData=data.output;
      }
    )
  }
  addInput(){}
  getData(question:String){
    var tempTools:QuestionTools[]=[];
    this.tools.forEach(function(item){
      if(item.Question===question){
        tempTools.push(item);
      }
    });
   // console.log(tempTools); 
    return tempTools;
  }
  
  onChangeObj(selectedTool) {
    console.log("you have selected:"+selectedTool);
    this.selectedToolObj = selectedTool;
   
  }
  getParam(selectedQuestion,selectedTool){
    var tempParams:ToolParams[]=[];
    this.params.forEach(function(item){
      if(item.ToolName===selectedTool && item.Question===selectedQuestion){
        console.log("param name:"+item.ParamName);
        console.log("q:"+item.Question);
        console.log("t:"+item.ToolName);

        tempParams.push(item);
      }
    });
    this.inputParams=tempParams;
    return this.inputParams;
  }
  onSubmit(){
    console.log(this.InputForm.value);
  }
 
  haveContainer(){
     this.containerFlag=true;
     
  }
  noContainer(){
    this.noValueContainer=true;
  }
  
}
// export class SelectBuildComponent implements OnInit {
//   LanguageFrom: FormGroup;
//   RepositoryForm : FormGroup;
//   ServerFrom: FormGroup;
  
//   constructor(private formBuilder: FormBuilder) { }
 
//   ngOnInit() {
//    
//     this.LanguageFrom = this.formBuilder.group({ 
//       selectLang: new FormControl('',Validators.required), 
//     });

//     this.RepositoryForm = this.formBuilder.group({ 
//       selectRepo: new FormControl('',Validators.required), 
//       username: new FormControl('',Validators.required), 
//       url: new FormControl('',Validators.required), 
//       password: new FormControl('',Validators.required), 
//     });

//     this.ServerFrom = this.formBuilder.group({ 
//       selectServer: new FormControl('',Validators.required), 
//     });
//   }
  

// }
