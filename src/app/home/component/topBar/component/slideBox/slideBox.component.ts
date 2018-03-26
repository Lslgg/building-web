import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'topBar-slideBox',
    templateUrl: './slideBox.html',
    styleUrls: ['./slideBox.scss'],
})

export class SlideBoxComponent implements OnInit {

    @Input() iconName: String;
    @Input() title: String;

    constructor() { }

    ngOnInit() { }

}