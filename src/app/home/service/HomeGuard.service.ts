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
                var column = this.route.snapshot.params['column'];
                var type = this.route.snapshot.params['type'];
                if (this.router.url.includes('home/rarticle')) {
                    console.log(111);
                    // this.router.navigateByUrl('home/article/' + column + '/' + type);
                } else if (this.router.url.includes('home/article')) {
                    console.log(222);
                    // this.router.navigateByUrl('home/rarticle/' + column + '/' + type);
                }
            }
        }


        return true;

    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }

}