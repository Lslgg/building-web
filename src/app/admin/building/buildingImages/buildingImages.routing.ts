import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { BuildingImagesComponent } from './buildingImages.component';
import { AddBuildingImagesComponent } from './component/addBuildingImages.component';

export const BuildingImagesRoutes: Routes = [
  { path: 'buildingImages', component: BuildingImagesComponent, data: { title: '菜单列表', module: 'buildingImages', power: "SHOW" } },
  { path: 'addBuildingImages', component: AddBuildingImagesComponent, data: { title: '菜单列表', module: 'buildingImages', power: "SHOW" } },
  { path: 'addBuildingImages/:id', component: AddBuildingImagesComponent, data: { title: '菜单列表', module: 'buildingImages', power: "SHOW" } },
];

//一定要将路由加载的模块导出到主模块
export const BuildingImagesList = [
  BuildingImagesComponent,
  AddBuildingImagesComponent
];

