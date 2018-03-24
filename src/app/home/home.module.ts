import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule, routedComponents } from './home.routing';


@NgModule({
    imports: [
        HomeRoutingModule
    ],
    exports: [],
    declarations: [routedComponents],
    providers: [],
})
export class HomeModule { }
