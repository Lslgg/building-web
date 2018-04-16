import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular/Apollo';

@Component({
    selector: 'building-building-images',
    templateUrl: 'buildingContact.html',
    styleUrls: ['buildingContact.scss']
})

export class BuildingContactComponent implements OnInit {

    typeList: Array<{ key: string, value: string }> = [{ key: 'true', value: "未读" }, { key: 'false', value: "已读" }];

    buildingContact: TableStr = {
        data: gql`query($index:Int,$size:Int,$info:searchBuildingContact){
            list:getBuildingContactPage(pageIndex:$index,pageSize:$size,buildingContact:$info){
                id,title,name,phone,email,content,createAt,isValid
            }
            count:getBuildingContactCount(buildingContact:$info)
        }`,
        delete: gql`mutation($id:String){
            deleteBuildingContact(id:$id)
        }`,
        url: "admin/addBuildingContact",
        where: { buildingContact: {} }
    };

    constructor(private router: Router, private apollo: Apollo) {
    }

    ngOnInit() { }

    onSet(info: any, dataList: any) {
        const sql = gql`mutation($id:String) {
            info:setState(id:$id)
          }`;
        this.apollo.mutate<{ info: any }>({
            mutation: sql,
            variables: { id: info }
        }).subscribe(data => {
            if (data.data.info) {
                for (let i = 0; i < dataList.length; i++) {
                    if (dataList[i]['id'] == info) {
                        dataList[i]['isValid'] = !dataList[i]['isValid'];
                    }
                }
            }
        })
    }

    detail: { title: string, name: string, email: string, phone: string, content: string } = null;

    onDetail(id: String, dataList: any) {
        this.detail = null;
        for (let i = 0; i < dataList.length; i++) {
            if (dataList[i]['id'] == id) {
                this.detail = { title: dataList[i].title, name: dataList[i].name, email: dataList[i].email, phone: dataList[i].phone, content: dataList[i].content };
            }
        }
    }

    back() {
        this.detail = null;
    }

}