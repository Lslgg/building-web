import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'home-home',
    templateUrl: 'home.html',
    styleUrls: ['./home.scss']
})

export class HomeComponent implements OnInit {

    flag: Boolean = false;

    imgList: Array<String> = ['assets/building-img/1-1P2241022140-L.jpg', 'assets/building-img/1-1P2241022380-L.jpg', 'assets/building-img/1-1P2241023190-L.jpg'];

    constructor() { }

    ngOnInit() { }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: any) {
        if (window.scrollY > 0) {
            this.flag = true;
        } else {
            this.flag = false;
        }
    }
}