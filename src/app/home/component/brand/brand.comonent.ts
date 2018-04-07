import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'home-brand',
    templateUrl: 'brand.html',
    styleUrls: ['brand.scss', '../../media.scss'],
})

export class BrandComponent implements OnInit {

    flag: Boolean = false;

    colWidth: number = 0;

    itemWidth: number = 0;

    marginLeft: number = 0;

    isSlide: boolean = false;

    dataList: Array<String> = ['assets/building-img/brand-2.png', 'assets/building-img/brand-3.png'
        , 'assets/building-img/brand-4.png', 'assets/building-img/brand-5.png', 'assets/building-img/brand-6.png'
        , 'assets/building-img/brand-7.png', 'assets/building-img/brand-8.png', 'assets/building-img/brand-9.png'];
    list: Array<String> = [];

    constructor() { }

    ngAfterViewInit() {
        let colWidth = document.getElementById('brand-col')['offsetWidth'];
        let itemWidth = document.getElementById('brand-box')['offsetWidth'];
        this.colWidth = colWidth;
        this.itemWidth = (colWidth / 100) * 2 + itemWidth;
        if (this.isSlide) {
            this.marginLeft = -this.itemWidth;
        }
    }

    ngOnInit() {
        let width = window.innerWidth;
        if (width >= 1200 && this.dataList.length >= 5) {
            this.isSlide = true;
            this.getList(true);
            return;
        } else if (width >= 769 && width < 1200 && this.dataList.length >= 3) {
            this.isSlide = true;
            this.getList(true);
            return;
        } else if (width >= 577 && width < 769 && this.dataList.length >= 2) {
            this.isSlide = true;
            this.getList(true);
            return;
        } else if (width < 577 && this.dataList.length > 1) {
            this.isSlide = true;
            this.getList(true);
            return;
        }
        this.getList(false);

    }

    getList(isSlide: Boolean) {
        if (isSlide) {
            this.list.push(this.dataList[this.dataList.length - 1]);
            for (let i = 0; i < this.dataList.length; i++) {
                this.list.push(this.dataList[i]);
            }
            this.list.push(this.dataList[0]);
        } else {
            for (let i = 0; i < this.dataList.length; i++) {
                this.list.push(this.dataList[i]);
            }
        }
    }

    onClick(flag: String) {
        var obj = this;
        if (this.isSlide && !this.flag) {
            if (flag == 'left') {
                this.flag = true;
                this.marginLeft = this.marginLeft - this.itemWidth;
                setTimeout(function () {
                    let t = obj.list[1];
                    for (let i = 1; i < obj.list.length - 1; i++) {
                        obj.list[i] = obj.list[i + 1];
                    }
                    obj.list[obj.list.length - 2] = t;
                    obj.list[obj.list.length - 1] = obj.list[1];
                    obj.list[0] = obj.list[obj.list.length - 2];
                    obj.marginLeft = -obj.itemWidth;
                    obj.flag = false;
                }, 200);
            } else if (flag = 'right') {
                this.flag = true;
                this.marginLeft = this.marginLeft + this.itemWidth;
                setTimeout(function () {
                    let t = obj.list[obj.list.length - 2];
                    for (let i = obj.list.length - 3; i > 0; i--) {
                        obj.list[i + 1] = obj.list[i];
                    }
                    obj.list[1] = t;
                    obj.list[obj.list.length - 1] = obj.list[1];
                    obj.list[0] = obj.list[obj.list.length - 2];
                    obj.marginLeft = -obj.itemWidth;
                    obj.flag = false;
                }, 200);
            }
        }
    }
}