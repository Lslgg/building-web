import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'home-navbar',
    templateUrl: 'navbar.html',
    styleUrls: ['./navbar.scss', '../../media.scss']
})

export class NavBarComponent implements OnInit {

    aboutList: Array<{ link: String, title: String }> = [{ link: "home/article/test", title: "公司简介" }, { link: "home/article/test", title: "品牌起源" }, { link: "home/gallery/test/1", title: "公司相册" }];
    serviceList: Array<{ link: String, title: String }> = [{ link: "test", title: "专业的服务团队" }, { link: "test", title: "专业的施工团队" }];
    eliteList: Array<{ link: String, title: String }> = [{ link: "test", title: "设计团队" }, { link: "test", title: "施工团队" }, { link: "test", title: "管理团队" }];

    flag: Number = 0;

    constructor() { }

    ngOnInit() { }

    onClick() {
        this.flag = this.flag.valueOf() + 1;
    }
}