import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'home-contact',
    templateUrl: 'contact.html',
    styleUrls: ['contact.scss', '../media.scss'],
})

export class ContactComponent implements OnInit {

    constructor(private apollo: Apollo) { }

    ngOnInit() { }

    // 查询 栏目图片 文章 联系图片1 
    getData() {
        this.apollo.query<{ list: any }>({
            query: gql`query {
                
            }`
        }).subscribe(({ data }) => {
            console.log(data);
        });
    }
}