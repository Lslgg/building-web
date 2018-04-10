import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'home-navbar',
    templateUrl: 'navbar.html',
    styleUrls: ['./navbar.scss', '../../media.scss']
})

export class NavBarComponent implements OnInit {

    tabFlag: Boolean = false;
    aboutList: Array<{ link: String, title: String }> = [{ link: "/home/article/test", title: "公司简介" }, { link: "/home/article/test", title: "品牌起源" }, { link: "/home/gallery/test/1", title: "公司相册" }];
    serviceList: Array<{ link: String, title: String }> = [{ link: "/home/article/test", title: "专业的服务团队" }, { link: "/home/article/test", title: "专业的施工团队" }];
    eliteList: Array<{ link: String, title: String }> = [{ link: "/home/gallery/test/1", title: "设计团队" }, { link: "/home/gallery/test/1", title: "施工团队" }, { link: "/home/gallery/test/1", title: "管理团队" }];
    nullList: Array<{ link: String, title: String }> = [];
    flag: Number = 0;

    constructor() { }

    ngOnInit() { }

    toggleTap() {
        this.tabFlag = !this.tabFlag;
    }

    onClick() {
        this.flag = this.flag.valueOf() + 1;
    }

    onEnter(info: String) {
        console.log(info);
    }

}