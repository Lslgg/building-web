import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-example',
    templateUrl: 'example.html',
    styleUrls: ['./example.scss'],
})

export class ExampleComponent implements OnInit {

    flag: Boolean = true;

    constructor() { }

    ngOnInit() {

    }

    onEnter() {
        console.log('111');
        // this.flag = false;
    }

}