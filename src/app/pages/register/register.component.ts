import { Component, OnInit } from '@angular/core';
import { ApiService, IUserLoginData } from 'src/app/api.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSuccess: boolean = false;
  isFailed: boolean = false;
  userModel: IUserLoginData = {} as IUserLoginData;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.api.registerUser(this.userModel).subscribe(
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
