import { Component, OnInit, Input, Inject } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { BuildingImages } from '../bean/buildingImages';

@Component({
    selector: 'home-service',
    templateUrl: 'service.html',
    styleUrls: ['./service.scss', '../../media.scss'],
    animations: [
        trigger('mouseState', [
            state('enter', style({
                width: '0',
            })),
            state('popup', style({
                width: '10%',
            })),
            state('down', style({
                width: '0',
            })),
            state('leave', style({
                width: '100%',
            })),
            transition('* => enter', [
                animate('250ms')
            ]),
            transition('enter => popup', [
                animate('150ms')
            ]),
            transition('popup => down', [
                animate('150ms')
            ]),
            transition('* => leave', animate('250ms ease-out', ))
        ])
    ]
})

export class ServiceComponent implements OnInit {

    @Input() data: Array<BuildingImages>;

    mouseState: string;

    dataServer: String = '';

    constructor(@Inject("commonData") private cdata: CommonData) {
        this.dataServer = this.cdata.dataServer + '/';
    }

    ngOnInit() {
        console.log(this.data);
    }

    onEnter() {
        this.mouseState = 'enter';
    }

    animationDone(e: any) {
        if (e.toState == 'enter' && this.mouseState != 'leave') {
            this.mouseState = 'popup';
        }
        if (e.toState == 'popup' && this.mouseState != 'leave') {
            this.mouseState = 'down';
        }
    }

    onLeave() {
        this.mouseState = 'leave';
    }

}