import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';
import { BuildingArticle } from '../component/bean/buildingArticle';

@Component({
    selector: 'home-contact',
    templateUrl: 'contact.html',
    styleUrls: ['contact.scss', '../media.scss'],
})

export class ContactComponent implements OnInit {

    column: String = '';

    article: String = '';


    constructor(private apollo: Apollo, private route: ActivatedRoute) {
        this.column = this.route.snapshot.params['column'];
    }

    ngOnInit() {
        this.getData();
    }

    // 查询 栏目图片 文章 联系图片1 
    getData() {
        this.apollo.query<{ article: Array<BuildingArticle> }>({
            query: gql`query($type:Json) {
                article: getBuildingArticleWhere(buildingArticle:{type:$type}) {
                    id,type,title,tag,author,content,desc,imageIds:Images{id,path},createAt
                }
            }`,
            variables: { type: `{ "$eq": "${this.column}" }` }
        }).subscribe(({ data }) => {
            if (data && data.article && data.article[0]) {
                this.article = data.article[0].content;
            }
        });
    }
}