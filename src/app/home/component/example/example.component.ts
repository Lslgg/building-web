import { Component, OnInit, Input, Inject } from '@angular/core';
import { BuildingImages } from '../bean/buildingImages';

@Component({
    selector: 'home-example',
    templateUrl: 'example.html',
    styleUrls: ['./example.scss'],
})

export class ExampleComponent implements OnInit {

    @Input() data: Array<BuildingImages>;

    flag: Boolean = true;

    dataServer: String = '';

    constructor(@Inject("commonData") private cdata: CommonData) {
        this.dataServer = this.cdata.dataServer + '/';
    }

    ngOnInit() {

    }

}