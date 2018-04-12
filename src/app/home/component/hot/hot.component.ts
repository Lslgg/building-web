import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { BuildingArticle } from '../bean/buildingArticle';

@Component({
    selector: 'home-hot',
    templateUrl: 'hot.html',
    styleUrls: ['hot.scss'],
})

export class HotComponent implements OnInit {

    constructor(private apollo: Apollo) { }

    newsList: Array<BuildingArticle> = [];

    ngOnInit() {
        this.getData();
    }

    // 查询 热门新闻X3    
    getData() {
        let sql = gql`query($pageIndex:Int,$pageSize:Int,$type:Json) {
                newsList:getBuildingArticlePage(pageIndex:$pageIndex,pageSize:$pageSize,buildingArticle:{type:$type}) {
                    id,type,title,tag,brief,author,imageIds:Images{id,path},content,desc,createAt
                }                
            }`;
        let variables = { pageIndex: 1, pageSize: 3, type: "{\"$eq\":\"news\"}" };

        this.apollo.query<{ newsList: Array<BuildingArticle> }>({
            query: sql,
            variables: variables
        }).subscribe(({ data }) => {
            if (data && data.newsList) {
                this.newsList = data.newsList;
            }
        });
    }
}