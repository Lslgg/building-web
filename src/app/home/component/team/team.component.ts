import { Component, OnInit, Input } from '@angular/core';
import { BuildingImages } from '../bean/buildingImages';

@Component({
    selector: 'home-team',
    templateUrl: 'team.html',
    styleUrls: ['./team.scss'],
})

export class TeamComponent implements OnInit {

    @Input() data: Array<BuildingImages>;

    constructor() { }

    ngOnInit() { }

}