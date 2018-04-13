import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular/Apollo';
import { ArticleTypeList } from '../../../home/component/bean/buildingArticleType';

@Component({
    selector: 'building-building-images',
    templateUrl: 'buildingArticle.html',
})

export class BuildingArticleComponent implements OnInit {

    typeList: Array<{ key: string, value: string }>;

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

    constructor(private router: Router, private apollo: Apollo) {
        this.typeList = ArticleTypeList.typeList;
    }

    ngOnInit() { }

    onData(event: any, dataList: any) {
        if (dataList) {
            for (let i = 0; i < dataList.length; i++) {
                for (let j = 0; j < this.typeList.length; j++) {
                    if (dataList[i].type == this.typeList[j].key) {
                        dataList[i].type = this.typeList[j].value;
                    }
                }
            }
        }
    }

}