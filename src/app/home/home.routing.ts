import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TopBarComponent } from './component/topBar/topBar.component';

var routesList: Routes = [
];

const routes: Routes = [
    {
        path: '',
        component: HomeComponent, data: { title: 'bulding' },
        children: routesList
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }

export const routedComponents = [
    HomeComponent,
    TopBarComponent,
];