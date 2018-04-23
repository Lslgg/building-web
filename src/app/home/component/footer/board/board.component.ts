import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'home-board',
    templateUrl: 'board.html',
    styleUrls: ['board.scss'],
    animations: [
        trigger('state', [
            state('inactive', style({
                width: '0'
            })),
            state('popup', style({
                width: '90%'
            })),
            state('down', style({
                width: '100%'
            })),
            state('active', style({
                width: '100%'
            })),
            transition('* => active', animate('200ms ease-in')),
            transition('active => popup', animate('150ms ease-in')),
            transition('popup => down', animate('250ms ease-in')),
            transition('* => inactive', animate('200ms ease-out'))
        ])
    ]
})

export class BoardComponent implements OnInit {

    @Input() info: String;

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