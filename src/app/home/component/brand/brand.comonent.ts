import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-brand',
    templateUrl: 'brand.html',
    styleUrls: ['brand.scss', '../../media.scss'],
})

export class BrandComponent implements OnInit {

    list: Array<String> = ['assets/building-img/brand-2.png', 'assets/building-img/brand-3.png'
        , 'assets/building-img/brand-4.png', 'assets/building-img/brand-5.png', 'assets/building-img/brand-6.png'
        , 'assets/building-img/brand-7.png', 'assets/building-img/brand-8.png', 'assets/building-img/brand-9.png'];

    constructor() { }

    ngOnInit() { }
}