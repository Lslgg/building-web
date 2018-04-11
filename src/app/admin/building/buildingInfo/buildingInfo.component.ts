import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular/Apollo';

@Component({
    selector: 'building-building-images',
    templateUrl: 'buildingInfo.html',
})

export class BuildingInfoComponent implements OnInit {

    buildingInfo: TableStr = {
        data: gql`query($index:Int,$size:Int,$info:searchBuildingInfo){
            list:getBuildingInfoPage(pageIndex:$index,pageSize:$size,buildingInfo:$info){
                id, phone, address
            }
            count:getBuildingInfoCount(buildingInfo:$info)
        }`,
        delete: gql`mutation($id:String){
            deleteBuildingInfo(id:$id)
        }`,
        url: "admin/addBuildingInfo",
        where: { buildingInfo: {} }
    };

    constructor(private router: Router, private apollo: Apollo) { }

    ngOnInit() { }

}