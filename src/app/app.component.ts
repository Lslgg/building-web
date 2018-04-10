import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import gql from 'graphql-tag';

@Component({
  selector: 'body',
  template: `
    <router-outlet></router-outlet> 
  `
})
export class AppComponent {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private apollo: Apollo, httpLink: HttpLink) {
    var grqphqlUrl = environment.dataServer;
    apollo.create({
      link: createUploadLink({
        uri: `${grqphqlUrl}/graphql`,
        credentials: "include"
      }),
      cache: new InMemoryCache()
    });
    // this.setWebSiteTitle();
  }

<<<<<<< HEAD
  // private setWebSiteTitle() {
=======
  private setWebSiteTitle() {
>>>>>>> db0425b1c9ca640b65fe2d586fd80540e16f1393
  //   this.apollo.query<{ contactInfo: any }>({
  //     query: gql`query{
  //         contactInfo:getContactInfo {
  //             title
  //         },
  //     }`,
  //   }).subscribe(({ data }) => {
  //     if (data.contactInfo && data.contactInfo[0]) {
  //       this.titleService.setTitle(data.contactInfo[0].title);
  //     } else {
  //       this.titleService.setTitle('未定义');
  //     }
  //   });
<<<<<<< HEAD
  // }
=======
  }
>>>>>>> db0425b1c9ca640b65fe2d586fd80540e16f1393

}