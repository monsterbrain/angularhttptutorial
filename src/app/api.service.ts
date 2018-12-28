import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

export interface IResListData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IResData[];
}

export interface IResData {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface IUserData {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IUserListData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUserData[];
}

export interface IUserLoginData {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  UserListUrl = 'https://reqres.in/api/users';
  ResourceListUrl = 'https://reqres.in/api/unknown';
  RegisterUserUrl = 'https://reqres.in/api/register';
  LoginUserUrl = 'https://reqres.in/api/login';

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get<IUserListData>(this.UserListUrl);
  }

  getResourceList() {
    return this.http.get<IResListData>(this.ResourceListUrl);
  }

  registerUser(loginData: IUserLoginData): Observable<ILoginResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<ILoginResponse>(this.RegisterUserUrl, loginData, httpOptions)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  loginUser(loginData: IUserLoginData): Observable<ILoginResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<ILoginResponse>(this.LoginUserUrl, loginData, httpOptions)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.error}`); // 'error': is the error message
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
