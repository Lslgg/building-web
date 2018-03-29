import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'home-navbar',
    templateUrl: 'navbar.html',
    styleUrls: ['./navbar.scss', '../../media.scss']
})

export class NavBarComponent implements OnInit {

    list: Array<{ link: String, title: String }> = [{ link: "test", title: "公司简介" }, { link: "test", title: "品牌起源" }, { link: "test", title: "产品简介" }];

    flag: Number = 0;

    constructor() { }

    ngOnInit() { }

    onClick() {
        this.flag = this.flag.valueOf() + 1;
    }
}