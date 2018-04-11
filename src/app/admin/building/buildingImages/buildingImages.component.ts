import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular/Apollo';

@Component({
    selector: 'building-building-images',
    templateUrl: 'buildingImages.html',
})

export class BuildingImagesComponent implements OnInit {

    typeList: Array<{ key: string, value: string }> = [
        { key: "logo", value: "网站图标" },
        { key: "qrcode", value: "二维码" },
        { key: "slide", value: "幻灯片" },
        { key: "index-service1", value: "首页-服务优势1" },
        { key: "index-service2", value: "首页-服务优势2" },
        { key: "index-service3", value: "首页-服务优势3" },
        { key: "index-contact1", value: "首页-联系图片1" },
        { key: "index-contact2", value: "首页-联系图片2" },
        { key: "index-brand", value: "首页-合作商标" },
        { key: "contact-contact1", value: "联系我们-图片1" },
        { key: "gallery-company", value: "相册-公司相册" },
        { key: "gallery-example", value: "相册-定制案例" },
        { key: "gallery-elite", value: "相册-精英团队" },
    ];

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

    constructor(private router: Router, private apollo: Apollo) { }

    ngOnInit() { }

}