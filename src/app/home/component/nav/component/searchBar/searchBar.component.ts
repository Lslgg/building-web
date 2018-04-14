import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home-search-bar',
    templateUrl: 'searchBar.html',
    styleUrls: ['./searchBar.scss']
})

export class SearchBarComponent implements OnInit {

    toggle: boolean = false;

    @Input()
    set flag(flag: Number) {
        if (flag && flag > 0) {
            this.move();
        }
    }

    constructor(private router: Router) { }

    ngOnInit() { }

    move() {
        this.toggle = !this.toggle;
    }

    onEnter(info: String) {
        this.router.navigateByUrl("/home/news/news/1/" + info);
    }
}