import { Component, OnInit, Input, Inject } from '@angular/core';
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

    dataServer: String = '';

    constructor(private route: ActivatedRoute, @Inject("commonData") private cdata: CommonData) {
        this.dataServer = this.cdata.dataServer + '/';
        this.column = this.route.snapshot.params['column'];
    }

    ngOnInit() {
        window.scrollTo(0, 0);
    }
}