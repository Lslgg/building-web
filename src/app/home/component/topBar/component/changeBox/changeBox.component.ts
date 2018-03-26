import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'topBar-changeBox',
    templateUrl: './changeBox.html',
    styleUrls: ['./changeBox.scss'],
})

export class ChangeBoxComponent implements OnInit {

    @Input() iconName: String;

    constructor() { }

    ngOnInit() { }

}