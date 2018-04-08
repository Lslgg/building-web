import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

export const ContactRoutes: Routes = [
    {
        path: 'contact', component: ContactComponent, data: { title: '英德市华诚装饰设计有限公司', module: 'none', power: "none" },
    }
];

export const ContactRoutedComponents = [
    ContactComponent
];