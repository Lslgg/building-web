import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule, routedComponents } from './home.routing';
import { CommonModule } from '@angular/common';
import { HomeGuard } from './service/HomeGuard.service';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    exports: [],
    declarations: [
        routedComponents,
    ],
    providers: [HomeGuard],
})
export class HomeModule { }
