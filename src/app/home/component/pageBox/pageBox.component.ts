import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home-page-box',
    templateUrl: 'pageBox.html',
    styleUrls: ['pageBox.scss'],
})

export class PageBoxComponent implements OnInit {

    @Input()
    set count(count: number) {
        if (count) {
            this._count = count;
            if (this._count && this._size) {
                this.getPageArray();
            }
        }
    }
    @Input()
    set size(size: number) {
        if (size) {
            this._size = size;
            if (this._count && this._size) {
                this.getPageArray();
            }
        }
    }

    @Input() url: String = 'home/gallery/test';

    _count: number;

    _size: number;

    pageArray: Array<number>;

    index: number = -1;

    constructor(public route: ActivatedRoute) { }

    getPageArray() {
        var t = parseInt((this._count / this._size) + '');
        if (this._count % this._size != 0) {
            t++;
        }
        this.pageArray = [];
        for (let i = 0; i < t; i++) {
            this.pageArray.push(i + 1);
        }
    }

    ngOnInit() {
        this.index = this.route.snapshot.params['index'];
    }
}