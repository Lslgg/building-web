import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BuildingImages } from '../../bean/buildingImages';

@Component({
    selector: 'home-elite-box',
    templateUrl: 'eliteBox.html',
    styleUrls: ['./eliteBox.scss'],
    animations: [
        trigger('state', [
            state('inactive', style({
                height: '0'
            })),
            state('popup', style({
                height: '90%'
            })),
            state('down', style({
                height: '100%'
            })),
            state('active', style({
                height: '100%'
            })),
            transition('* => active', animate('200ms ease-in')),
            transition('active => popup', animate('150ms ease-in')),
            transition('popup => down', animate('250ms ease-in')),
            transition('* => inactive', animate('200ms ease-out'))
        ])
    ]
})

export class EliteBoxComponent implements OnInit {

    @Input() data: BuildingImages;

    state: String = 'void';

    constructor() { }

    ngOnInit() { }

    onEnter() {
        this.state = 'active';
    }

    onLeave() {
        this.state = 'inactive';
    }

    animationDone(event) {
        if (event.toState == 'active' && this.state != 'inactive') {
            this.state = 'popup';
        }

        if (event.toState == 'popup' && this.state != 'inactive') {
            this.state = 'down';
        }
    }

}