import { Injectable, Inject } from '@angular/core';

import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    ActivatedRoute
} from '@angular/router';


@Injectable()
export class HomeGuard implements CanActivate, CanActivateChild {


    constructor(private router: Router, private route: ActivatedRoute) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {

        if (route.url && route.url[0] && route.url[0].path) {

            if (route.url[0].path == 'article') {
                if (this.router.url.includes('home/rarticle')) {
                    return true;
                } else if (this.router.url.includes('home/article')) {
                    let column = route.params['column'];
                    let type = route.params['type'];
                    this.router.navigateByUrl('home/rarticle/' + column + '/' + type);
                }
            }

            if (route.url[0].path == 'gallery') {
                if (this.router.url.includes('home/rgallery')) {
                    return true;
                } else if (this.router.url.includes('home/gallery')) {
                    let column = route.params['column'];
                    let type = route.params['type'];
                    let index = route.params['index'];
                    this.router.navigateByUrl('home/rgallery/' + column + '/' + type + '/' + index);
                }
            }

        }
        return true;

    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }

}