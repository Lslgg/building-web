import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsItemComponent } from './newsItem/newsItem.component';
import { NewsContentComponent } from './newsContent/newsContent.component';

export const NewsRoutes: Routes = [
    {
        path: 'news/:column/:index', component: NewsComponent, data: { title: '英德市华诚装饰设计有限公司', module: 'none', power: "none" },
    },
    {
        path: 'news/:column/:index/:search', component: NewsComponent, data: { title: '英德市华诚装饰设计有限公司', module: 'none', power: "none" },
    },
    {
        path: 'newsContent/:column/:id', component: NewsContentComponent, data: { title: '英德市华诚装饰设计有限公司', module: 'none', power: "none" },
    }
];

export const NewsRoutedComponents = [
    NewsComponent,
    NewsItemComponent,
    NewsContentComponent
];