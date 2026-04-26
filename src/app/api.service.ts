import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, delay } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';

const MOCK_USER_LIST: IUserListData = {
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [
    { id: 1, first_name: "George", last_name: "Bluth", avatar: "https://placehold.net/avatar.png" },
    { id: 2, first_name: "Janet", last_name: "Weaver", avatar: "https://placehold.net/avatar-2.png" },
    { id: 3, first_name: "Emma", last_name: "Wong", avatar: "https://placehold.net/avatar-4.png" }
  ]
};

const MOCK_RES_LIST: IResListData = {
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [
    { id: 1, name: "cerulean", year: 2000, color: "#98B2D1", pantone_value: "15-4020" },
    { id: 2, name: "fuchsia rose", year: 2001, color: "#C74375", pantone_value: "17-2031" },
    { id: 3, name: "true red", year: 2002, color: "#BF1932", pantone_value: "19-1664" }
  ]
};

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

  getUserList(): Observable<IUserListData> {
    return of(MOCK_USER_LIST).pipe(delay(500));
  }

  getResourceList(): Observable<IResListData> {
    return of(MOCK_RES_LIST).pipe(delay(500));
  }

  registerUser(loginData: IUserLoginData): Observable<ILoginResponse> {
    if (loginData.email && loginData.password) {
      return of({ token: 'QpwL5tke4Pnpja7X4' }).pipe(delay(500));
    }
    return throwError('Missing email or password');
  }

  loginUser(loginData: IUserLoginData): Observable<ILoginResponse> {
    if (loginData.email && loginData.password) {
      return of({ token: 'QpwL5tke4Pnpja7X4' }).pipe(delay(500));
    }
    return throwError('Missing email or password');
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
