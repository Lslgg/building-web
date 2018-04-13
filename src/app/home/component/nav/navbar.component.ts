import { Component, OnInit, EventEmitter, Output, Input, Inject } from '@angular/core';
import { BuildingMenu } from '../bean/buildingMenu';
import { BuildingImages } from '../bean/buildingImages';

@Component({
    selector: 'home-navbar',
    templateUrl: 'navbar.html',
    styleUrls: ['./navbar.scss', '../../media.scss']
})

export class NavBarComponent implements OnInit {

    @Input() firstMenu: Array<BuildingMenu>;
    @Input()
    set secondMenu(secondMenu: Array<BuildingMenu>) {
        if (secondMenu) {
            this.getSecondMenu(secondMenu);
        }
    }
    @Input() logo: BuildingImages;
    aboutList: Array<BuildingMenu> = [];
    serviceList: Array<BuildingMenu> = [];
    eliteList: Array<BuildingMenu> = [];
    tabFlag: Boolean = false;
    nullList: Array<{ link: String, title: String }> = [];
    flag: Number = 0;

    dataServer: String = '';

    constructor(@Inject("commonData") private cdata: CommonData) {
        this.dataServer = this.cdata.dataServer + '/';
    }

    ngOnInit() { }

    getSecondMenu(secondMenu: Array<BuildingMenu>) {
        this.aboutList = [];
        this.serviceList = [];
        this.eliteList = [];
        for (let i = 0; i < secondMenu.length; i++) {
            switch (secondMenu[i].parentId) {
                case '5acd666554239d2c34c82464':
                    this.aboutList.push(secondMenu[i]);
                    break;
                case '5acd668154239d2c34c82467':
                    this.serviceList.push(secondMenu[i]);
                    break;
                case '5acd668954239d2c34c82468':
                    this.eliteList.push(secondMenu[i]);
                    break;
            }
        }
    }

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