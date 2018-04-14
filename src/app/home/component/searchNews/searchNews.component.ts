import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { BuildingArticle } from '../bean/buildingArticle';
import { Router } from '@angular/router';

@Component({
    selector: 'home-search-news',
    templateUrl: 'searchNews.html',
    styleUrls: ['searchNews.scss', '../../media.scss']
})

export class SearchNewsComponent implements OnInit {

    newsList: Array<BuildingArticle> = [];

    constructor(private apollo: Apollo, private router: Router) { }

    ngOnInit() { }

    onEnter(info: String) {
        this.router.navigateByUrl("/home/news/news/1/" + info);
    }

}