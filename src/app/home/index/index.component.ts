import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-index',
    templateUrl: 'index.html',
    styleUrls: ['index.scss']
})

export class IndexComponent implements OnInit {

    imgList: Array<String> = ['assets/building-img/1-1P2241022140-L.jpg', 'assets/building-img/1-1P2241022380-L.jpg', 'assets/building-img/1-1P2241023190-L.jpg'];

    constructor() { }

    ngOnInit() { }
}