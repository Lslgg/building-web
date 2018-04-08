import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsItemComponent } from './newsItem/newsItem.component';

export const NewsRoutes: Routes = [
    {
        path: 'news/:index', component: NewsComponent, data: { title: '英德市华诚装饰设计有限公司', module: 'none', power: "none" },
    }
];

export const NewsRoutedComponents = [
    NewsComponent,
    NewsItemComponent
];