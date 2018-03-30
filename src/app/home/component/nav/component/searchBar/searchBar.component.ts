import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'home-search-bar',
    templateUrl: 'searchBar.html',
    styleUrls: ['./searchBar.scss']
})

export class SearchBarComponent implements OnInit {

    toggle: boolean = true;

    @Input()
    set flag(flag: Number) {
        if (flag > 0) {
            this.move();
        }
    }

    constructor() { }

    ngOnInit() { }

    move() {
        this.toggle = !this.toggle;
    }
}