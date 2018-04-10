import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-search-news',
    templateUrl: 'searchNews.html',
    styleUrls: ['searchNews.scss','../../media.scss']
})

export class SearchNewsComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    onEnter(info: String) {
        console.log(info);
    }
}