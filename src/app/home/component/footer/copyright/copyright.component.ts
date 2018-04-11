import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'home-footer-copyright',
    templateUrl: 'copyright.html',
    styleUrls: ['copyright.scss'],
})

export class CopyrightComponent implements OnInit {

    @Input() copyright = '';

    constructor() { }

    ngOnInit() { }
}