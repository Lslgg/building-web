import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { GalleryShowComponent } from './galleryShow/galleryShow.component';

export const GalleryRoutes: Routes = [
    {
        path: 'gallery/:column/:type/:index', component: GalleryComponent, data: { title: '英德市华诚装饰设计有限公司', module: 'none', power: "none" },
    },
    {
        path: 'rgallery/:column/:type/:index', component: GalleryComponent, data: { title: '英德市华诚装饰设计有限公司', module: 'none', power: "none" },
    },
    {
        path: 'galleryShow/:column/:id', component: GalleryShowComponent, data: { title: '英德市华诚装饰设计有限公司', module: 'none', power: "none" },
    }
];

export const GalleryRoutedComponents = [
    GalleryComponent,
    GalleryShowComponent
];