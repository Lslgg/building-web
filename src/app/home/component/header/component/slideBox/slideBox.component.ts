import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
    selector: 'topBar-slideBox',
    templateUrl: './slideBox.html',
    styleUrls: ['./slideBox.scss'],
    animations: [
        trigger('mouseState', [
            state('enter', style({
                height: '100%',
            })),
            state('popup', style({
                height: '90%',
            })),
            state('down', style({
                height: '100%',
            })),
            state('leave', style({
                height: '0',
                backgroundColor: "transparent",
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

export class SlideBoxComponent implements OnInit {

    @Input() iconName: String;

    @Input() title: String = 'void';

    mouseState: string;

    constructor() { }

    ngOnInit() { }

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