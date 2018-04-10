import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'home-article',
    templateUrl: 'article.html',
    styleUrls: ['article.scss', '../media.scss']
})

export class ArticleComponent implements OnInit {

    constructor(private apollo:Apollo) { }

    ngOnInit() { }

    // 查询 栏目图片 文章内容 
    getData() {
        this.apollo.query<{ list: any }>({
            query: gql`query {
                
            }`
        }).subscribe(({ data }) => {
            console.log(data);
        });
    }
}