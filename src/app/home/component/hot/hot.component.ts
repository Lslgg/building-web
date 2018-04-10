import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'home-hot',
    templateUrl: 'hot.html',
    styleUrls: ['hot.scss'],
})

export class HotComponent implements OnInit {

    constructor(private apollo: Apollo) { }

    ngOnInit() { }

    // 查询 热门新闻X3
    getData() {
        this.apollo.query<{ list: any }>({
            query: gql`query {
                    
                }`
        }).subscribe(({ data }) => {
            console.log(data);
        });
    }
}