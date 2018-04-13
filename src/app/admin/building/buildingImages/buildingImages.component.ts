import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular/Apollo';
import { ImagesTypeList } from '../../../home/component/bean/buildingImagesType';

@Component({
    selector: 'building-building-images',
    templateUrl: 'buildingImages.html',
})

export class BuildingImagesComponent implements OnInit {

    typeList: Array<{ key: string, value: string }>;

    buildingImages: TableStr = {
        data: gql`query($index:Int,$size:Int,$info:searchBuildingImages){
            list:getBuildingImagesPage(pageIndex:$index,pageSize:$size,buildingImages:$info){
                id,title,desc,type,updateAt,createAt
            }
            count:getBuildingImagesCount(buildingImages:$info)
        }`,
        delete: gql`mutation($id:String){
            deleteBuildingImages(id:$id)
        }`,
        url: "admin/addBuildingImages",
        where: { buildingImages: {} }
    };

    constructor(private router: Router, private apollo: Apollo) {
        this.typeList = ImagesTypeList.typeList;
    }

    ngOnInit() { }

}