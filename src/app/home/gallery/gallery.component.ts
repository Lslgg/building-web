import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';
import { BuildingImages } from '../component/bean/buildingImages';

@Component({
    selector: 'home-gallery',
    templateUrl: 'gallery.html',
    styleUrls: ['gallery.scss', '../media.scss']
})

export class GalleryComponent implements OnInit {

    index: Number = 1;

    type: String = '';

    pageSize: Number = 6;

    galleryList: Array<BuildingImages> = [];

    count: Number = -1;

    column: String = '';

    constructor(private apollo: Apollo, private route: ActivatedRoute) {
        this.index = parseInt(this.route.snapshot.params['index']);
        this.type = 'gallery-' + this.route.snapshot.params['type'];
        this.column = this.route.snapshot.params['column'];
    }

    ngOnInit() {
        window.scrollTo(0, 0);
        this.getData();
    }

    getData() {
        let sql = gql`query($pageIndex:Int,$pageSize:Int,$type:Json) {
                galleryList:getBuildingImagesPage(pageIndex:$pageIndex,pageSize:$pageSize,buildingImages:{type:$type}) {
                    id,title,brief,type,desc,imageIds:Images{id,path}
                }
                count:getBuildingImagesCount(buildingImages:{type:$type})
            }`;
        let variables = { pageIndex: this.index, pageSize: this.pageSize, type: `{"$eq":"${this.type}"}` };

        this.apollo.query<{ galleryList: Array<BuildingImages>, count: Number }>({
            query: sql,
            variables: variables
        }).subscribe(({ data }) => {
            if (data && data.galleryList) {
                this.galleryList = data.galleryList;
            }
            if (data && data.count) {
                this.count = data.count;
            }
        });
    }
}