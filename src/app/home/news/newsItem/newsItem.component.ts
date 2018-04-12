import { Component, OnInit, Input } from '@angular/core';
import { BuildingArticle } from '../../component/bean/buildingArticle';

@Component({
    selector: 'home-news-item',
    templateUrl: 'newsItem.html',
    styleUrls: ['newsItem.scss']
})

export class NewsItemComponent implements OnInit {

    @Input() newsItem: BuildingArticle;

    constructor() { }

    ngOnInit() { }
}