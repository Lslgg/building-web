import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { BuildingArticle } from '../../component/bean/buildingArticle';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home-news-content',
    templateUrl: 'newsContent.html',
    styleUrls: ['newsContent.scss', '../../media.scss']
})

export class NewsContentComponent implements OnInit {

    id: String = '';

    newsItem: BuildingArticle;

    constructor(private apollo: Apollo, private route: ActivatedRoute) {
        this.id = this.route.snapshot.params['id'];
    }

    ngOnInit() {
        this.getData();
    }

    // 查询 新闻内容
    getData() {
        this.apollo.query<{ newsItem: BuildingArticle }>({
            query: gql`query($id:String) {
                newsItem:getBuildingArticleById(id:$id) {
                    id,type,title,tag,brief,author,imageIds:Images{id,path},content,desc,createAt
                }
            }`,
            variables: { id: this.id }
        }).subscribe(({ data }) => {
            if (data && data.newsItem) {
                this.newsItem = data.newsItem;
            }
        });
    }
}