import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'home-home',
    templateUrl: 'home.html',
    styleUrls: ['./home.scss']
})

export class HomeComponent implements OnInit {

    flag: Boolean = false;

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