import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'home-news-content',
    templateUrl: 'newsContent.html',
    styleUrls: ['newsContent.scss', '../../media.scss']
})

export class NewsContentComponent implements OnInit {

    constructor(private apollo: Apollo) { }

    ngOnInit() { }

    // 查询 新闻内容
    getData() {
        this.apollo.query<{ list: any }>({
            query: gql`query {
                
            }`
        }).subscribe(({ data }) => {
            console.log(data);
        });
    }
}