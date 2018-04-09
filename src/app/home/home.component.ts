import { Component, OnInit, HostListener } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'home-home',
    templateUrl: 'home.html',
    styleUrls: ['./home.scss']
})

export class HomeComponent implements OnInit {

    flag: Boolean = false;

    constructor(private apollo: Apollo) { }

    ngOnInit() { }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: any) {
        if (window.scrollY > 0) {
            this.flag = true;
        } else {
            this.flag = false;
        }
    }

    test() {
        this.apollo.query<{list:any}>({
            query: gql`query {
                
            }`
        }).subscribe(({ data }) => {
            console.log(data);
        });
    }
}