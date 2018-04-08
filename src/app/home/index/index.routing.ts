import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';

export const IndexRoutes: Routes = [
    {
        path: '', component: IndexComponent, data: { title: '英德市华诚装饰设计有限公司', module: 'none', power: "none" },
    },
    {
        path: 'index', component: IndexComponent, data: { title: '英德市华诚装饰设计有限公司', module: 'none', power: "none" },
    }
];

export const IndexRoutedComponents = [
    IndexComponent
];