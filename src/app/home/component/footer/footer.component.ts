import { Component, OnInit, Input } from '@angular/core';
import { BuildingInfo } from '../bean/buildingInfo';
import { BuildingImages } from '../bean/buildingImages';
import { BuildingArticle } from '../bean/buildingArticle';
import { BuildingMenu } from '../bean/buildingMenu';

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

    @Input() firstMenu: Array<BuildingMenu>;

    _info: BuildingInfo = { id: '', phone: '', email: '', qqLink: '', tcWeibo: '', xlWeibo: '', tbLink: '', address: '', brief: '', code: '', copyright: '', board: '' };

    constructor() { }

    ngOnInit() { }
}