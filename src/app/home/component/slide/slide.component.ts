import { Component, OnInit, Input, Inject, EventEmitter, Output } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { setInterval } from 'timers';
import { BuildingImages } from '../bean/buildingImages';

@Component({
    selector: 'home-slide',
    templateUrl: 'slide.html',
    styleUrls: ['./slide.scss', '../../media.scss'],
    animations: [
        trigger('state', [
            state('left', style({
            })),
            state('right', style({
            })),
            transition('init => right', [animate('500ms ease-in', style({ marginLeft: '-200%' }))]),
            transition('init => left', animate('500ms ease-out', style({ marginLeft: '0' }))),
        ])
    ]
})

export class SlideComponent implements OnInit {

    @Input()
    set data(data: Array<BuildingImages>) {
        if (data && data[0] && data[0].imageIds) {
            this.list = [];
            for (let i = 0; i < data[0].imageIds.length; i++) {
                this.list.push(data[0].imageIds[i].path);
                this.getList();
            }
        }
    }
    list: Array<String> = [];
    @Input() toNextImg: Boolean = true;
    @Input() startIndex: Number = 0;
    @Output() clickImg = new EventEmitter<any>();
    strArr: Array<String> = [];
    ponintArray: Array<boolean> = [];
    state: string = "init";
    marginLeft: string = "-100%";
    dataServer: string = '';
    height: number = 680;

    constructor(@Inject("commonData") private cdata: CommonData,
        private apollo: Apollo) {
        this.dataServer = cdata.dataServer + '/';
    }

    ngOnInit() {
        this.getList();
    }

    toggleState(flag: number) {
        if (flag == -1 && this.strArr.length > 2) {
            this.state = 'left';
            this.setPoint(-1);
        } else if (flag == 1 && this.strArr.length > 2) {
            this.state = 'right';
            this.setPoint(1);
        }
    }

    setPoint(flag: number) {
        var t: number;
        for (var i = 0; i < this.ponintArray.length; i++) {
            if (this.ponintArray[i]) {
                t = i;
            }
            this.ponintArray[i] = false;
        }
        if (flag == 1) {
            t++;
            if (t > this.ponintArray.length - 1) {
                t = 0;
            }
        } else if (flag == -1) {
            t--;
            if (t < 0) {
                t = this.ponintArray.length - 1;
            }
        }
        this.ponintArray[t] = true;
    }

    animationDone(e: any) {
        if (e.toState == 'right') {
            var t = this.strArr[1];
            for (var i = 1; i < this.strArr.length - 1; i++) {
                this.strArr[i] = this.strArr[i + 1];
            }
            this.strArr[this.strArr.length - 2] = t;
            this.strArr[this.strArr.length - 1] = this.strArr[1];
            this.strArr[0] = this.strArr[this.strArr.length - 2];
            this.state = 'init';
        } else if (e.toState == 'left') {
            var t = this.strArr[this.strArr.length - 2];
            for (var i = this.strArr.length - 3; i >= 1; i--) {
                this.strArr[i + 1] = this.strArr[i];
            }
            this.strArr[1] = t;
            this.strArr[this.strArr.length - 1] = this.strArr[1];
            this.strArr[0] = this.strArr[this.strArr.length - 2];
            this.state = 'init';
        }
    }

    getList() {
        if (this.list.length > 0) {
            this.initList();
        }
    }

    initList() {
        if (this.list.length > 1) {
            this.strArr.push(this.list[this.list.length - 1]);
            for (var i = 0; i < this.list.length; i++) {
                this.strArr.push(this.list[i]);
                this.ponintArray.push(false);
            }
            this.strArr.push(this.list[0]);
            this.ponintArray[0] = true;
            this.toNext();
        } else if (this.list.length == 1) {
            this.strArr.push(this.list[0]);
            this.strArr.push(this.list[0]);
        }
        var l = 1;
        while (l < this.startIndex) {
            // this.toggleState(1);       
            // i++;
            var t = this.strArr[1];
            for (var i = 1; i < this.strArr.length - 1; i++) {
                this.strArr[i] = this.strArr[i + 1];
            }
            this.strArr[this.strArr.length - 2] = t;
            this.strArr[this.strArr.length - 1] = this.strArr[1];
            this.strArr[0] = this.strArr[this.strArr.length - 2];
            this.state = 'init';
            this.setPoint(1);
            l++;
        }
    }

    toNext() {
        if (this.toNextImg == true) {
            setInterval(() => {
                this.toggleState(1);
            }, 5000);
        }
    }

    cimg() {
        this.clickImg.emit();
    }
}