import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Component({
    selector: 'home-pic-row',
    templateUrl: 'picRow.html',
    styleUrls: ['picRow.scss'],
})

export class PicRowComponent implements OnInit {

    @Input() img: String;

    @Input() colName: String;

    colImg: BuildingImages;

    constructor(private apollo: Apollo) { }

    ngOnInit() {
        if (this.colName) {
            this.getData();
        }
    }

    getData() {
        this.apollo.query<{ article: Array<BuildingImages> }>({
            query: gql`query($type:Json) {                
            }`,
            variables: { type: `{ "$eq": "${this.colName}" }` }
        }).subscribe(({ data }) => {            
        });
    }



}