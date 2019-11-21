import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { PostApiService } from '../services/post-api.service';
import { GetApiService } from '../services/get-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-build-pipeline',
  templateUrl: './build-pipeline.component.html',
  styleUrls: ['./build-pipeline.component.css']
})
export class BuildPipelineComponent implements OnInit {

  gitForm : FormGroup;
  jenkinsForm : FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private postApi: PostApiService,private getapi: GetApiService,
    private router: Router) {}

  ngOnInit() {
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
  }
  onSubmit(){
    this.postApi.callAccessApi(this.gitForm.value,this.jenkinsForm.value).subscribe((res:any)=>{
      if(res.StatusCode==200){
      console.log(res);
      this.router.navigate(['../selectTools']);
      
      }
      else{
        console.log("error")
      }
      console.log("submitted the data"+ res);
    });
  }

}
 