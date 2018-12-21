import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  UserListUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get<IUserListData>(this.UserListUrl);
  }
}
