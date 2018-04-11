import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'home-fotter-contact',
    templateUrl: 'contact.html',
    styleUrls: ['contact.scss'],
})

export class ContactComponent implements OnInit {

    @Input() phone = '';
    @Input() address = '';
    @Input() email = '';
    @Input() code = '';

    constructor() { }

    ngOnInit() { }
}