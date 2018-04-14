import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';

export const ArticleRoutes: Routes = [
    {
        path: 'article/:column/:type', component: ArticleComponent, data: { title: '英德市华诚装饰设计有限公司', module: 'none', power: "none" },
    },
    {
        path: 'rarticle/:column/:type', component: ArticleComponent, data: { title: '英德市华诚装饰设计有限公司', module: 'none', power: "none" },
    }
];

export const ArticleRoutedComponents = [
    ArticleComponent
];