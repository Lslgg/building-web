import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { BuildingImages } from '../component/bean/buildingImages';
import { BuildingInfo } from '../component/bean/buildingInfo';

@Component({
    selector: 'home-index',
    templateUrl: 'index.html',
    styleUrls: ['index.scss']
})

export class IndexComponent implements OnInit {

    imgList: Array<String> = ['assets/building-img/1-1P2241022380-L.jpg', 'assets/building-img/1-1P2241023190-L.jpg'];

    slideList: Array<BuildingImages>;

    service1: Array<BuildingImages>;

    service2: Array<BuildingImages>;

    service3: Array<BuildingImages>;

    exampleList: Array<BuildingImages>;

    teamList: Array<BuildingImages>;

    contact1: Array<BuildingImages>;

    contact2: Array<BuildingImages>;

    brandList: Array<BuildingImages>;

    info: Array<BuildingInfo>;

    constructor(private apollo: Apollo) { }

    ngOnInit() {
        this.getData();
    }

    // 查询 轮播图 服务图X3 案例图X6 团队图X4 联系图1 联系图2 新闻资讯X2 商标图片
    getData() {
        type data = {
            imgList: Array<String>, slideList: Array<BuildingImages>, exampleList: Array<BuildingImages>
            , teamList: Array<BuildingImages>, contact1: Array<BuildingImages>, contact2: Array<BuildingImages>
            , brandList: Array<BuildingImages>, service1: Array<BuildingImages>, service2: Array<BuildingImages>
            , service3: Array<BuildingImages>, info: Array<BuildingInfo>
        };
        var sql = gql`query {            
            slideList:getBuildingImagesWhere(buildingImages:{type:"slide"}) {
                id,title,imageIds:Images{ id path },brief,desc     
            }
            service1:getBuildingImagesWhere(buildingImages:{type:"index-service1"}) {
                id,title,imageIds:Images{ id path },brief,desc     
            }
            service2:getBuildingImagesWhere(buildingImages:{type:"index-service2"}) {
                id,title,imageIds:Images{ id path },brief,desc     
            }
            service3:getBuildingImagesWhere(buildingImages:{type:"index-service3"}) {
                id,title,imageIds:Images{ id path },brief,desc     
            }
            exampleList:getBuildingImagesPage(pageIndex:1,pageSize:6,buildingImages:{type:"gallery-example"}) {
                id,title,imageIds:Images{ id path },brief,desc     
            }
            teamList:getBuildingImagesPage(pageIndex:1,pageSize:4,buildingImages:{type:"gallery-elite"}) {
                id,title,imageIds:Images{ id path },brief,desc     
            }
            contact1:getBuildingImagesWhere(buildingImages:{type:"index-contact1"}) {
                id,title,imageIds:Images{ id path },brief,desc     
            }
            contact2:getBuildingImagesWhere(buildingImages:{type:"index-contact2"}) {
                id,title,imageIds:Images{ id path },brief,desc     
            }
            brandList:getBuildingImagesWhere(buildingImages:{type:"index-brand"}) {
                id,title,imageIds:Images{ id path },brief,desc     
            }         
            info:getBuildingInfo {
                    id,phone,email,qqLink,tcWeibo,xlWeibo,tbLink,address,brief,code,copyright
            }   
        }`;
        this.apollo.query<data>({
            query: sql
        }).subscribe(({ data }) => {
            if (data) {
                this.imgList = data.imgList;
                this.slideList = data.slideList;
                this.exampleList = data.exampleList;
                this.teamList = data.teamList;
                this.contact1 = data.contact1;
                this.contact2 = data.contact2;
                this.brandList = data.brandList;
                this.service1 = data.service1;
                this.service2 = data.service2;
                this.service3 = data.service3;
                this.teamList = data.teamList;
                this.info = data.info;
            }
        });
    }
}