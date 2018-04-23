import { Component, OnInit, Input, Inject } from '@angular/core';
import { BuildingImages } from '../../component/bean/buildingImages';
import { Apollo } from 'apollo-angular';
import { ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'home-gallery-show',
    templateUrl: 'galleryShow.html',
    styleUrls: ['galleryShow.scss', '../../media.scss']
})

export class GalleryShowComponent implements OnInit {


    id: String;

    column: String;

    imgList: Array<String> = [];

    flag: Boolean = false;

    imgPath: String = '';

    dataServer: String = '';

    constructor(private apollo: Apollo, private route: ActivatedRoute, @Inject("commonData") private cdata: CommonData) {
        this.id = this.route.snapshot.params['id'];
        this.column = this.route.snapshot.params['column'];
        this.dataServer = this.cdata.dataServer + '/';
    }

    ngOnInit() {
        window.scrollTo(0, 0);
        this.getData();
    }

    show(info: String) {
        if (info != '') {
            this.imgPath = info;            
        }
        this.flag = !this.flag;
    }

    getData() {
        let sql = gql`query($id:String) {
            imgItem:getBuildingImagesById(id:$id) {
                id,title,brief,type,desc,imageIds:Images{id,path}
            }            
        }`;
        let variables = { id: `${this.id}` };

        this.apollo.query<{ imgItem: BuildingImages }>({
            query: sql,
            variables: variables
        }).subscribe(({ data }) => {
            if (data && data.imgItem && data.imgItem.imageIds) {
                this.imgList = [];
                for (let i = 0; i < data.imgItem.imageIds.length; i++) {
                    this.imgList.push(data.imgItem.imageIds[i].path);
                }
            }
        });
    }
}