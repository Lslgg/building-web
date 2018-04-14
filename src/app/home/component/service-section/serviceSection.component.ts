import { Component, OnInit, Input } from '@angular/core';
import { BuildingImages } from '../bean/buildingImages';

@Component({
    selector: 'home-service-section',
    templateUrl: 'serviceSection.html',
    styleUrls: ['serviceSection.scss', '../../media.scss'],
})

export class ServiceSectionComponent implements OnInit {

    @Input() service1: Array<BuildingImages>;

    @Input() service2: Array<BuildingImages>;

    @Input() service3: Array<BuildingImages>;

    constructor() { }

    ngOnInit() {
        console.log(this.service1);
    }
}