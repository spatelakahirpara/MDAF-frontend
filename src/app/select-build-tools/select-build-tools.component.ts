import { Component, OnInit } from '@angular/core';
import { FormArray, Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { QuestionService } from '../services/question.service';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
export interface Question {
  ID: string;
  Question: string;
}
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
  selector: 'app-select-build-tools',
  templateUrl: './select-build-tools.component.html',
  styleUrls: ['./select-build-tools.component.css']
})
export class SelectBuildToolsComponent implements OnInit {
  dynamicForm: FormGroup;
  submitted = false;
  questions:Question[]=[];
  tools:QuestionTools[]=[];
  params: ToolParams[]=[];
  selectedToolObj="";
  toolMap= new Map();
  constructor(private formBuilder: FormBuilder,private questionService: QuestionService) { }
toolArray:QuestionTools[]=[]
  ngOnInit() {
      this.dynamicForm = this.formBuilder.group({
          
          tickets: new FormArray([])
      }); 
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

  // convenience getters for easy access to form fields
  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.tickets as FormArray; }

  onChangeTickets(e) {
    for (let i = this.t.length; i < this.questions.length; i++) {
        this.loadTool(this.questions[i].ID);        
    }
  }
   
   loadTool(id) {
     this.questionService.callApiTool(id).subscribe(
        (data: any) => {
          var output:string= JSON.stringify(data)
          if(this.toolMap.has(id)){
            this.toolMap.get(id);
          }
          else{
            this.toolMap.set(id,data);
          }
          this.t.push(this.formBuilder.group({
                  SelectedTool: [data, Validators.required]
                  //email: ['', [Validators.required, Validators.email]]
              }));
        
        });
  }
  getTool(id){
    if(this.toolMap.has(id)){
      this.toolArray=this.toolMap.get(id);
      return this.toolArray;
    }
  }
  onChangeObj(e){
    console.log("you selected:"+ e);
    this.selectedToolObj=e;

  }

  onSubmit() {
      this.submitted = true;
      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
  }

  onReset() {
      // reset whole form back to initial state
      this.submitted = false;
      this.dynamicForm.reset();
      this.t.clear();
  }

  onClear() {
      // clear errors and reset ticket fields
      this.submitted = false;
      this.t.reset();
  }
}

