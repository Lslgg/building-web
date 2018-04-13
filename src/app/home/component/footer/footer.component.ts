import { Component, OnInit, Input } from '@angular/core';
import { BuildingInfo } from '../bean/buildingInfo';
import { BuildingImages } from '../bean/buildingImages';
import { BuildingArticle } from '../bean/buildingArticle';

@Component({
    selector: 'home-footer',
    templateUrl: 'footer.html',
    styleUrls: ['footer.scss', '../../media.scss'],
})

export class FooterComponent implements OnInit {

    @Input()
    set info(info: BuildingInfo) {
        if (info) {
            this._info = info;
        }
    }
    @Input() newsList: Array<BuildingArticle>;

    @Input() qrcode: BuildingImages;

    _info: BuildingInfo = { id: '', phone: '', email: '', qqLink: '', tcWeibo: '', xlWeibo: '', tbLink: '', address: '', brief: '', code: '', copyright: '' };

    constructor() { }

    ngOnInit() { }
}