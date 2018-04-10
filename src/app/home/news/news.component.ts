import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'home-news',
    templateUrl: 'news.html',
    styleUrls: ['news.scss', '../media.scss']
})

export class NewsComponent implements OnInit {

    constructor(private apollo: Apollo) { }

    ngOnInit() { }

    // 查询 新闻分页
    getData() {
        this.apollo.query<{ list: any }>({
            query: gql`query {
                
            }`
        }).subscribe(({ data }) => {
            console.log(data);
        });
    }
}