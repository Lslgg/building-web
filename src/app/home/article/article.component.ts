import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';
import { BuildingArticle } from '../component/bean/buildingArticle';

@Component({
    selector: 'home-article',
    templateUrl: 'article.html',
    styleUrls: ['article.scss', '../media.scss']
})

export class ArticleComponent implements OnInit {

    type: String = '';

    content: String = '';

    constructor(private apollo: Apollo, private route: ActivatedRoute) {
        this.type = this.route.snapshot.params['type'];
    }

    ngOnInit() {
        this.getData();
    }

    // 查询 栏目图片 文章内容 
    getData() {
        this.apollo.query<{ article: BuildingArticle }>({
            query: gql`query($type:Json) {
                article: getBuildingArticleWhere(buildingArticle:{type:$type}) {
                    id,type,title,author,content,desc,imagesIds:Images{id,path},createAt
                }
            }`,
            variables: { type: `{ "$eq": "${this.type}" }` }
        }).subscribe(({ data }) => {
            if (data && data.article && data.article[0]) {
                this.content = data.article[0].content;
            }
        });
    }
}