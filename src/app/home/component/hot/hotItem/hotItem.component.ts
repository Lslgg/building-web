import { Component, OnInit, Input, Inject } from '@angular/core';
import { BuildingArticle } from '../../bean/buildingArticle';

@Component({
    selector: 'home-hot-item',
    templateUrl: 'hotItem.html',
    styleUrls: ['hotItem.scss']
})

export class HotItemComponent implements OnInit {

    @Input() newsItem: BuildingArticle;

    dataServer: String = '';

    constructor(@Inject("commonData") private cdata: CommonData) {
        this.dataServer = this.cdata.dataServer + '/';
    }

    ngOnInit() { }
}