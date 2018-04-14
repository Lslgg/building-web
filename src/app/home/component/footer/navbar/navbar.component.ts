import { Component, OnInit, Input } from '@angular/core';
import { BuildingMenu } from '../../bean/buildingMenu';

@Component({
    selector: 'home-footer-navbar',
    templateUrl: 'navbar.html',
    styleUrls: ['navbar.scss'],
})

export class NavbarComponent implements OnInit {

    @Input() firstMenu: Array<BuildingMenu>;

    constructor() { }

    ngOnInit() { }
}