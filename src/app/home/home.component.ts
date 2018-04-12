import { Component, OnInit, HostListener } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { BuildingMenu } from './component/bean/buildingMenu';
import { BuildingImages } from './component/bean/buildingImages';
import { BuildingInfo } from './component/bean/buildingInfo';

@Component({
    selector: 'home-home',
    templateUrl: 'home.html',
    styleUrls: ['./home.scss']
})



export class HomeComponent implements OnInit {

    flag: Boolean = false;

    firstMenu: Array<BuildingMenu>;

    secondMenu: Array<BuildingMenu>;

    logo: BuildingImages;

    info: BuildingInfo;

    constructor(private apollo: Apollo) { }

    ngOnInit() {
        this.getData();
    }

    // 查询通用信息 电话 邮箱 微博 qq 淘宝 公司简介 联系地址 电话 传真 邮箱 二维码 菜单
    getData() {
        this.apollo.query<{ firstMenu: Array<BuildingMenu>, secondMenu: Array<BuildingMenu>, logo: Array<BuildingImages>, info: Array<BuildingInfo> }>({
            query: gql`query {
                firstMenu:getBuildingMenuWhere(buildingMenu:{isSecond:false}) {
                    id, title, link, isSecond, parentId
                }
                secondMenu:getBuildingMenuWhere(buildingMenu:{isSecond:true}) {
                    id, title, link, isSecond, parentId
                }
                logo:getBuildingImagesWhere(buildingImages:{type:"网站图标"}) {
                  id,title,brief,type,imageIds:Images{id,path}
                }
                info:getBuildingInfo {
                    id,phone,email,qqLink,tcWeibo,xlWeibo,tbLink,address,brief,code,copyright
                }
            }`
        }).subscribe(({ data }) => {
            this.firstMenu = data.firstMenu;
            this.secondMenu = data.secondMenu;
            if (data.logo && data.logo[0]) {
                this.logo = data.logo[0];
            }
            if (data.info && data.info[0]) {
                this.info = data.info[0];
            }
        });
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: any) {
        if (window.scrollY > 0) {
            this.flag = true;
        } else {
            this.flag = false;
        }
    }
}

