import { Component, OnInit, Input } from '@angular/core';
import { BuildingInfo } from '../../bean/buildingInfo';

@Component({
    selector: 'home-footer-brief',
    templateUrl: 'brief.html',
    styleUrls: ['brief.scss'],
})

export class BriefComponent implements OnInit {

    @Input() info: BuildingInfo;

    constructor() { }

    ngOnInit() { }
}