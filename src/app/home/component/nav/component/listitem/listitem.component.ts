import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'home-list-item',
    templateUrl: 'listItem.html',
    styleUrls: ['./listItem.scss', '../../../../media.scss']
})

export class ListItemComponent implements OnInit {

    @Input() link: String = '/';

    @Input() title: String = '';

    @Input() secondList: Array<{ link: String, title: String }> = null;

    @Input() isSearch: Boolean = false;

    @Output() onClick = new EventEmitter<Boolean>();

    constructor() { }

    ngOnInit() { }

    onClickItem() {
        this.onClick.emit(true);
    }
}