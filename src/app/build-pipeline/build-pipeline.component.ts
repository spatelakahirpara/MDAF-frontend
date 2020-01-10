import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { PostApiService, ToolAccess } from '../services/post-api.service';
import { GetApiService } from '../services/get-api.service';
import { Router } from '@angular/router';
import { AccessPlatformService } from '../services/access-platform.service';


@Component({
  selector: 'app-build-pipeline',
  templateUrl: './build-pipeline.component.html',
  styleUrls: ['./build-pipeline.component.css']
})
export class BuildPipelineComponent {



  gitForm : FormGroup;
  jenkinsForm : FormGroup;
  loadData:String[]=[];
  public accessData= [];

  

  constructor(private formBuilder: FormBuilder, 
    private postApi: PostApiService,private getApi: GetApiService,private getaccess: AccessPlatformService,
    private router: Router) {}
  
  ngOnInit() {
  //this.getaccess.callgetAccessApi()
  //.subscribe(data=>this.accessData=data);
    this.gitForm = this.formBuilder.group({ 
      gitUserId: new FormControl('',Validators.required), 
      gitPassword: new FormControl('',Validators.required), 
      gitUrl: new FormControl('',Validators.required), 
    });
    this.jenkinsForm = this.formBuilder.group({
      jenkinsHostIp: new FormControl('',Validators.required), 
      jenkinsUserName: new FormControl('',Validators.required), 
      jenkinsPassword: new FormControl('',Validators.required)
    });
    // this.getapi.accessData();
  }
  
  onSubmit(){
    console.log("user"+ this.getApi.getUserName());
    this.postApi.callAccessApi(this.gitForm.value,this.jenkinsForm.value,this.getApi.getUserName()).subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(['../build']);
      
    });
  }

}
 
