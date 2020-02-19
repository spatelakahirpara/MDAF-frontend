import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiService } from '../services/get-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private registerService: GetApiService) { }
  username: string;
  password: string;
    ngOnInit() {
    }
    register(): void {
        this.registerService.callRegisterApi(this.username, this.password).subscribe((res: any) => {
          if (res.StatusCode === 200) {

            this.router.navigate(['../login']);
          } else {
            console.log( 'error' );
          }
          console.log('submitted the data' + res);
        });
      }

}
