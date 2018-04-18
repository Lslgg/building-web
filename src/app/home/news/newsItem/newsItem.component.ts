import { Component, OnInit, Input, Inject } from '@angular/core';
import { BuildingArticle } from '../../component/bean/buildingArticle';

@Component({
    selector: 'home-news-item',
    templateUrl: 'newsItem.html',
    styleUrls: ['newsItem.scss']
})

export class NewsItemComponent implements OnInit {

    @Input() newsItem: BuildingArticle;

    dataServer: String = '';

    constructor(@Inject("commonData") private cdata: CommonData) {
        this.dataServer = this.cdata.dataServer + '/';
     }

    ngOnInit() { }
}