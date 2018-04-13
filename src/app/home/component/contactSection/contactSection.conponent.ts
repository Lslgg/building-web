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

    @Input()
    set contact2(contact2: Array<BuildingImages>) {
        if (contact2 && contact2[0] && contact2[0].imageIds && contact2[0].imageIds[0]) {
            this.bgImg = this.cdata.dataServer + '/' + contact2[0].imageIds[0].path.toString();
            document.getElementsByClassName('contact-section')[0].setAttribute('style', "background-image:url('" + this.bgImg + "')");
        }
    }


    bgImg: String = '';

    @Input() info: Array<BuildingInfo>;

    dataServer: String = '';

    constructor(@Inject("commonData") private cdata: CommonData) {
        this.dataServer = this.cdata.dataServer + '/';
    }

    ngOnInit() { }
}