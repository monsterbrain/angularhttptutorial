import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  UserListUrl = 'https://reqres.in/api/users';
  ResourceListUrl = 'https://reqres.in/api/unknown';

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get<IUserListData>(this.UserListUrl);
  }

  getResourceList() {
    return this.http.get<IResListData>(this.ResourceListUrl);
  }
}
