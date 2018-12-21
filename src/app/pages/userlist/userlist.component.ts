import { Component, OnInit } from '@angular/core';
import { ApiService, IUserListData, IUserData } from 'src/app/api.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})

export class UserlistComponent implements OnInit {
  api: ApiService;

  userListData: IUserListData;
  userList: IUserData[] = [];

  constructor(api: ApiService) {
    this.api = api;
  }

  ngOnInit() {
    this.api.getUserList()
      .subscribe((listData: IUserListData) => {
        // this.userListData = listData;
        // console.log(this.userListData);
        this.userList = listData.data;
      });
  }

}
