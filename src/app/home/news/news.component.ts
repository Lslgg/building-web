import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BuildingArticle } from '../component/bean/buildingArticle';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'home-news',
    templateUrl: 'news.html',
    styleUrls: ['news.scss', '../media.scss']
})

export class NewsComponent implements OnInit {

    url: String = '';

    index: Number = 1;

    count: Number = 0;

    pageSize: Number = 6;

    newsList: Array<BuildingArticle> = [];

    search: String;

    constructor(private apollo: Apollo, private route: ActivatedRoute) {
        this.url = '/home/news/' + this.route.snapshot.params['column'];
        this.index = parseInt(this.route.snapshot.params['index']);
        this.search = this.route.snapshot.params['search'];
        if (!this.search) {
            this.search = '';
        }
    }

    ngOnInit() {
        this.getData();
    }

    // 查询 新闻分页
    getData() {
        let sql = gql`query($pageIndex:Int,$pageSize:Int,$type:Json,$search:RegExp) {
                newsList:getBuildingArticlePage(pageIndex:$pageIndex,pageSize:$pageSize,buildingArticle:{type:$type,title:$search}) {
                    id,type,title,tag,brief,author,imageIds:Images{id,path},content,desc,createAt
                }
                count:getBuildingArticleCount(buildingArticle:{type:$type})
            }`;
        let variables = { pageIndex: this.index, pageSize: this.pageSize, type: "{\"$eq\":\"news\"}", search: this.search };

        this.apollo.query<{ newsList: Array<BuildingArticle>, count: Number }>({
            query: sql,
            variables: variables
        }).subscribe(({ data }) => {
            if (data && data.newsList) {
                this.newsList = data.newsList;
            }
            if (data && data.count) {
                this.count = data.count;
            }
        });
    }
}