import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular/Apollo';

@Component({
    selector: 'building-building-menu',
    templateUrl: 'buildingMenu.html',
})

export class BuildingMenuComponent implements OnInit {

    buildingMenu: TableStr = {
        data: gql`query($index:Int,$size:Int,$info:searchBuildingMenu){
            list:getBuildingMenuPage(pageIndex:$index,pageSize:$size,buildingMenu:$info){
                id,title,isSecond
            }
            count:getBuildingMenuCount(buildingMenu:$info)
        }`,
        delete: gql`mutation($id:String){
            deleteBuildingMenu(id:$id)
        }`,
        url: "admin/addBuildingMenu",
        where: { buildingMenu: {} }
    };

    constructor(private router: Router, private apollo: Apollo) {

    }

    ngOnInit() {
    }

}