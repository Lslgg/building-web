import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular/Apollo';

@Component({
    selector: 'building-building-images',
    templateUrl: 'buildingArticle.html',
})

export class BuildingArticleComponent implements OnInit {

    typeList: Array<{ key: string, value: string }> = [
        { key: "companyBrief", value: "关于我们-公司简介" },
        { key: "companyBrand", value: "关于我们-品牌简介" },
        { key: "service", value: "服务优势-专业的服务团队" },
        { key: "serviceWork", value: "服务优势-专业的施工团队" },
        { key: "contact", value: "联系我们" },
    ];

    buildingArticle: TableStr = {
        data: gql`query($index:Int,$size:Int,$info:searchBuildingArticle){
            list:getBuildingArticlePage(pageIndex:$index,pageSize:$size,buildingArticle:$info){
                id,title,type
            }
            count:getBuildingArticleCount(buildingArticle:$info)
        }`,
        delete: gql`mutation($id:String){
            deleteBuildingArticle(id:$id)
        }`,
        url: "admin/addBuildingArticle",
        where: { buildingArticle: {} }
    };

    constructor(private router: Router, private apollo: Apollo) { }

    ngOnInit() { }

}