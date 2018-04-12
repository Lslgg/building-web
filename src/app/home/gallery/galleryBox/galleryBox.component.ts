import { Component, OnInit, Input } from '@angular/core';
import { BuildingImages } from '../../component/bean/buildingImages';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home-gallery-box',
    templateUrl: 'galleryBox.html',
    styleUrls: ['galleryBox.scss']
})

export class GalleryBoxComponent implements OnInit {

    @Input() newsItem: BuildingImages;

    column: String;

    imgList: Array<String> = ['assets/building-img/1-1P2241022380-L.jpg', 'assets/building-img/1-1P2241023190-L.jpg'];

    constructor(private route: ActivatedRoute) {
        this.column = this.route.snapshot.params['column'];
    }

    ngOnInit() { }
}