import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiService } from '../services/get-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: GetApiService) { }
  username: string;
  password: string;

    ngOnInit() {
    }
    login() : void {
      
      this.loginService.callLoginApi(this.username,this.password).subscribe((res:any)=>{
        console.log(res.body.UserName);
        if(res.StatusCode==200){
        console.log(res);
        this.username= res.body.UserName;
        console.log(res.body.UserName);
          this.loginService.setUserName(res.body.UserName);
          this.router.navigate(['../selectTools']);

        }
        else{
          console.log("error")
        }
        console.log("submitted the data"+ res);
      });
    }
  }


