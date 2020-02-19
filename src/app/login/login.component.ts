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
    login(): void {
      this.loginService.callLoginApi(this.username, this.password).subscribe((res: any) => {
        if (res.StatusCode === 200) {
        console.log(res);
        this.username = res.body.UserName;
        console.log(res.body.UserName);
        this.loginService.setUserName(res.body.UserName);
        this.router.navigate(['../selectTools']);
        } else if (res.StatusCode === 404) {

          alert('Username and Password doesn\'t matched' );
          this.username = '';
          this.password = '';
        }
      });
    }
  }


