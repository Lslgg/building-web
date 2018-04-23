import { Component, OnInit, Input } from '@angular/core';
import { BuildingInfo } from '../bean/buildingInfo';

@Component({
    selector: 'home-header',
    templateUrl: 'header.html',
    styleUrls: ['./header.scss', '../../media.scss'],
})

export class HeaderComponent implements OnInit {

    @Input()
    set info(info: BuildingInfo) {
        if (info) {
            this._info = info;
        }
    }

    _info: BuildingInfo = { id: '', phone: '', email: '', qqLink: '', tcWeibo: '', xlWeibo: '', tbLink: '', address: '', brief: '', code: '', copyright: '', board: '' };

    constructor() { }

    ngOnInit() {

    }

}