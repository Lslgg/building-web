import { Component, OnInit, Input } from '@angular/core';
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

    imgList: Array<String> = ['assets/building-img/1-1P2241022380-L.jpg', 'assets/building-img/1-1P2241023190-L.jpg', 'assets/building-img/1-1P2241023190-L.jpg', 'assets/building-img/1-1P2241023190-L.jpg', 'assets/building-img/1-1P2241023190-L.jpg', 'assets/building-img/1-1P2241023190-L.jpg', 'assets/building-img/1-1P2241023190-L.jpg'];

    imgItem: BuildingImages;

    flag: Boolean = false;

    imgPath: String = '';

    constructor(private apollo: Apollo, private route: ActivatedRoute) {
        this.id = this.route.snapshot.params['id'];
        this.column = this.route.snapshot.params['column'];
    }

    ngOnInit() {
        this.getData();
    }

    show(info: String) {
        this.imgPath = info;
        console.log(info);
        this.flag = !this.flag;
    }

    getData() {
        let sql = gql`query($id:String) {
            imgItem:getBuildingImagesById(id:$id) {
                id,title,brief,type,desc,imagesIds:Images{id,path}
            }            
        }`;
        let variables = { id: `${this.id}` };

        this.apollo.query<{ imgItem: BuildingImages }>({
            query: sql,
            variables: variables
        }).subscribe(({ data }) => {
            if (data && data.imgItem) {
                this.imgItem = data.imgItem;
            }
        });
    }
}