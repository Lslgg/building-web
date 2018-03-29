import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule, routedComponents } from './home.routing';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    exports: [],
    declarations: [
        routedComponents,
    ],
    providers: [],
})
export class HomeModule { }
