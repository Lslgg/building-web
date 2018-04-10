import { Component, OnInit, HostListener } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'home-home',
    templateUrl: 'home.html',
    styleUrls: ['./home.scss']
})

export class HomeComponent implements OnInit {

    flag: Boolean = false;

    constructor(private apollo: Apollo) { }

    ngOnInit() { }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: any) {
        if (window.scrollY > 0) {
            this.flag = true;
        } else {
            this.flag = false;
        }
    }


    // 查询通用信息 电话 邮箱 微博 qq 淘宝 公司简介 联系地址 电话 传真 邮箱 二维码 菜单
    getData() {
        this.apollo.query<{ list: any }>({
            query: gql`query {
                
            }`
        }).subscribe(({ data }) => {
            console.log(data);
        });
    }
}