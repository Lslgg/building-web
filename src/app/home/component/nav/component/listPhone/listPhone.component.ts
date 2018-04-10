import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: '.home-list-phone',
    templateUrl: 'listPhone.html',
    styleUrls: ['./listPhone.scss']
})

export class ListPhoneComponent implements OnInit {

    @Input() link: String = '/';

    @Input() title: String = '';

    @Input() secondList: Array<{ link: String, title: String }> = null;

    flag: Boolean = false;

    constructor() { }

    ngOnInit() { }

    onClick() {
        this.flag = !this.flag;
    }

}