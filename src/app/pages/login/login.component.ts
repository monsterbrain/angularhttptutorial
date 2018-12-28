import { Component, OnInit } from '@angular/core';
import { IUserLoginData, ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSuccess: boolean;
  isFailed: boolean;
  userModel: IUserLoginData = {} as IUserLoginData;
  
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.api.loginUser(this.userModel).subscribe(
      resp => {
        console.log('resp ' + resp.token);
        this.isSuccess = true;
        this.isFailed = false;
      },
      _error => {
        this.isFailed = true;
        this.isSuccess = false;
      }
    );
  }

}
