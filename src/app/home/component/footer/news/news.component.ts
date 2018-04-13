import { Component, OnInit, Input } from '@angular/core';
import { BuildingArticle } from '../../bean/buildingArticle';

@Component({
    selector: 'home-footer-news',
    templateUrl: 'news.html',
    styleUrls: ['news.scss'],
})

export class NewsComponent implements OnInit {

    @Input() newsList: Array<BuildingArticle> = [];

    constructor() { }

    ngOnInit() { }
}