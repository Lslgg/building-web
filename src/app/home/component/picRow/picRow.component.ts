import { Component, OnInit, Input, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { BuildingImages } from '../bean/buildingImages';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home-pic-row',
    templateUrl: 'picRow.html',
    styleUrls: ['picRow.scss'],
})

export class PicRowComponent implements OnInit {

    @Input() img: String;

    colName: String;

    colImg: BuildingImages;

    dataServer: String = '';

    constructor(private apollo: Apollo, @Inject("commonData") private cdata: CommonData, private route: ActivatedRoute) {
        this.dataServer = this.cdata.dataServer + '/';
        this.colName = this.route.snapshot.params['column'];
    }

    ngOnInit() {
        if (this.colName) {
            this.getData();
        }
    }

    getData() {
        this.apollo.query<{ colImg: Array<BuildingImages> }>({
            query: gql`query($type:Json) {                
                colImg: getBuildingImagesWhere(buildingImages:{type:$type}) {
                    id,title,imageIds:Images{ id path },brief,desc     
                }
            }`,
            variables: { type: `{ "$eq": "${this.colName}" }` }
        }).subscribe(({ data }) => {
            if (data && data.colImg && data.colImg[0]) {
                this.colImg = data.colImg[0];
            }
        });
    }



}