import { Component, OnInit, Input, Inject } from '@angular/core';
import { BuildingArticle } from '../bean/buildingArticle';

@Component({
    selector: 'home-news-section',
    templateUrl: 'newsSection.html',
    styleUrls: ['newsSection.scss', '../../media.scss'],
})

export class NewsSectionComponent implements OnInit {

    @Input() data: Array<BuildingArticle> = [];

    dataServer: String = '';

    constructor(@Inject("commonData") private cdata: CommonData) {
        this.dataServer = this.cdata.dataServer + '/';
    }

    ngOnInit() {
        console.log(this.data);
    }
}