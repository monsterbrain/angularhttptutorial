import { Component, OnInit } from '@angular/core';
import { ApiService, IResListData, IResData } from 'src/app/api.service';

@Component({
  selector: 'app-resourcelist',
  templateUrl: './resourcelist.component.html',
  styleUrls: ['./resourcelist.component.css']
})
export class ResourcelistComponent implements OnInit {
  resList: IResData[];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getResourceList()
      .subscribe((listData: IResListData) => {
        this.resList = listData.data;
      });
  }

}
