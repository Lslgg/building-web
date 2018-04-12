import { Component, OnInit, Input } from '@angular/core';
import { BuildingArticle } from '../../bean/buildingArticle';

@Component({
    selector: 'home-hot-item',
    templateUrl: 'hotItem.html',
    styleUrls: ['hotItem.scss']
})

export class HotItemComponent implements OnInit {

    @Input() newsItem: BuildingArticle;

    constructor() { }

    ngOnInit() { }
}