import { Component, OnInit, Input } from '@angular/core';
import { BuildingImages } from '../bean/buildingImages';

@Component({
    selector: 'home-elite',
    templateUrl: 'elite.html',
    styleUrls: ['./elite.scss', '../../media.scss'],
})

export class EliteComponent implements OnInit {

    @Input() data: Array<BuildingImages>;

    constructor() { }

    ngOnInit() { }

}