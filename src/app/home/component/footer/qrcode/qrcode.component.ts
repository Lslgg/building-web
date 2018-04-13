import { Component, OnInit, Input, Inject } from '@angular/core';
import { BuildingImages } from '../../bean/buildingImages';

@Component({
    selector: 'home-footer-qrcode',
    templateUrl: 'qrcode.html',
    styleUrls: ['qrcode.scss'],
})

export class QrcodeComponent implements OnInit {

    @Input() data: BuildingImages;

    dataServer: String = '';

    constructor(@Inject("commonData") private cdata: CommonData) {
        this.dataServer = this.cdata.dataServer;
    }

    ngOnInit() { }
}