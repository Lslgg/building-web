import { Component, OnInit, HostListener } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { BuildingMenu } from './component/bean/buildingMenu';
import { BuildingImages } from './component/bean/buildingImages';
import { BuildingInfo } from './component/bean/buildingInfo';
import { BuildingArticle } from './component/bean/buildingArticle';

@Component({
    selector: 'home-home',
    templateUrl: 'home.html',
    styleUrls: ['./home.scss']
})

export class HomeComponent implements OnInit {

    firstMenu: Array<BuildingMenu>;

    secondMenu: Array<BuildingMenu>;

    logo: BuildingImages;

    info: BuildingInfo;

    qrcode: BuildingImages;

    newsList: Array<BuildingArticle>;

    constructor(private apollo: Apollo) { }

    ngOnInit() {
        window.scrollTo(0, 0);
        this.getData();
    }

    // 查询通用信息 电话 邮箱 微博 qq 淘宝 公司简介 联系地址 电话 传真 邮箱 二维码 菜单
    getData() {
        type data = {
            firstMenu: Array<BuildingMenu>, secondMenu: Array<BuildingMenu>, logo: Array<BuildingImages>
            , info: Array<BuildingInfo>, qrcode: Array<BuildingImages>, newsList: Array<BuildingArticle>
        };
        this.apollo.query<data>({
            query: gql`query {
                firstMenu:getBuildingMenuWhere(buildingMenu:{isSecond:false}) {
                    id, title, link, isSecond, parentId
                }
                secondMenu:getBuildingMenuWhere(buildingMenu:{isSecond:true}) {
                    id, title, link, isSecond, parentId
                }
                logo:getBuildingImagesWhere(buildingImages:{type:"logo"}) {
                  id,title,brief,type,imageIds:Images{id,path}
                }
                info:getBuildingInfo {
                    id,phone,email,qqLink,tcWeibo,xlWeibo,tbLink,address,brief,code,copyright,board
                }
                qrcode:getBuildingImagesWhere(buildingImages:{type:"qrcode"}) {
                  id,title,brief,type,imageIds:Images{id,path}
                }
                newsList:getBuildingArticlePage(pageIndex:1,pageSize:5,buildingArticle:{type:"news"}) {
                    id,type,title,tag,brief,author,imageIds:Images{id,path},content,desc,createAt
                } 
            }`
        }).subscribe(({ data }) => {
            this.firstMenu = data.firstMenu;
            this.secondMenu = data.secondMenu;
            if (data && data.logo && data.logo[0]) {
                this.logo = data.logo[0];
            }
            if (data && data.info && data.info[0]) {
                this.info = data.info[0];
            }
            if (data && data.info && data.info[0]) {
                this.info = data.info[0];
            }
            if (data && data.qrcode && data.qrcode[0]) {
                this.qrcode = data.qrcode[0];
            }
            if (data && data.newsList) {
                this.newsList = data.newsList;
            }
        });
    }

}

