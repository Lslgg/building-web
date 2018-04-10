import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'home-index',
    templateUrl: 'index.html',
    styleUrls: ['index.scss']
})

export class IndexComponent implements OnInit {

    imgList: Array<String> = ['assets/building-img/1-1P2241022380-L.jpg', 'assets/building-img/1-1P2241023190-L.jpg'];

    constructor(private apollo: Apollo) { }

    ngOnInit() { }

    // 查询 轮播图 服务图X3 案例图X6 团队图X4 联系图1 联系图2 新闻资讯X2 商标图片
    getData() {
        this.apollo.query<{ list: any }>({
            query: gql`query {
                
            }`
        }).subscribe(({ data }) => {
            console.log(data);
        });
    }
}