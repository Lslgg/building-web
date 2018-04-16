import { Component, OnInit, Input, Inject } from '@angular/core';
import { BuildingImages } from '../bean/buildingImages';


@Component({
    selector: 'home-brand',
    templateUrl: 'brand.html',
    styleUrls: ['brand.scss', '../../media.scss'],
})

export class BrandComponent implements OnInit {

    flag: Boolean = false;

    marginLeft: number = 0;

    isSlide: boolean = false;

    index: number = 1;

    @Input()
    set data(data: Array<BuildingImages>) {
        if (data && data[0] && data[0].imageIds) {
            this.list = [];
            for (let i = 0; i < data[0].imageIds.length; i++) {
                this.list.push(data[0].imageIds[i].path);
            }
        }
    }

    list: Array<String> = [];

    dataServer: String = '';

    constructor(@Inject("commonData") private cdata: CommonData) {
        this.dataServer = this.cdata.dataServer + '/';
    }

    ngOnInit() { }

    onClick(flag: String) {
        var item = document.getElementsByClassName('brand-item');
        var col = document.getElementById('brand-col');
        var itemWidth = 0;
        var margin = 0;
        if (item && item[0]) {
            itemWidth = item[0].clientWidth;
        }
        if (col) {
            margin = col.offsetWidth.valueOf() / 100;
        }
        if (flag == 'left') {
            if (this.index - 1 == 0) {
                return;
            }
            this.marginLeft = this.marginLeft + itemWidth + margin * 2;
            this.index--;
        } else if (flag == 'right') {
            if (this.index == item.length) {
                return;
            }
            this.marginLeft = this.marginLeft - itemWidth - margin * 2;
            this.index++;
        }
    }
}
