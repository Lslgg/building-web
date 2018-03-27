import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule, routedComponents } from './home.routing';
import { SlideBoxComponent } from './component/header/component/slideBox/slideBox.component';
import { ChangeBoxComponent } from './component/header/component/changeBox/changeBox.component';


@NgModule({
    imports: [
        HomeRoutingModule
    ],
    exports: [],
    declarations: [routedComponents, SlideBoxComponent,ChangeBoxComponent],
    providers: [],
})
export class HomeModule { }
