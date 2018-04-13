import { Component, OnInit, Input, Inject } from '@angular/core';
import { BuildingImages } from '../bean/buildingImages';
import { BuildingInfo } from '../bean/buildingInfo';

@Component({
    selector: 'home-contact-section',
    templateUrl: 'contactSection.html',
    styleUrls: ['contactSection.scss'],
})

export class ContactSectionComponent implements OnInit {

    @Input() contact1: Array<BuildingImages>;

    @Input() contact2: Array<BuildingImages>;

    @Input() info: Array<BuildingInfo>;

    dataServer: String = '';

    constructor(@Inject("commonData") private cdata: CommonData) {
        this.dataServer = this.cdata.dataServer + '/';
    }

    ngOnInit() { }
}