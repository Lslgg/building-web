import { Component, OnInit, Input, Inject } from '@angular/core';
import { BuildingImages } from '../bean/buildingImages';

@Component({
    selector: 'home-team',
    templateUrl: 'team.html',
    styleUrls: ['./team.scss'],
})

export class TeamComponent implements OnInit {

    @Input() data: Array<BuildingImages>;

    dataServer: String = '';

    constructor(@Inject("commonData") private cdata: CommonData) {
        this.dataServer = this.cdata.dataServer + '/';
    }

    ngOnInit() { }

}