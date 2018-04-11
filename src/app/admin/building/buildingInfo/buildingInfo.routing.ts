import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { BuildingInfoComponent } from './buildingInfo.component';
import { AddBuildingInfoComponent } from './component/addBuildingInfo.component';

export const BuildingInfoRoutes: Routes = [
  { path: 'buildingInfo', component: BuildingInfoComponent, data: { title: '菜单列表', module: 'buildingInfo', power: "SHOW" } },
  { path: 'addBuildingInfo', component: AddBuildingInfoComponent, data: { title: '菜单列表', module: 'buildingInfo', power: "SHOW" } },
  { path: 'addBuildingInfo/:id', component: AddBuildingInfoComponent, data: { title: '菜单列表', module: 'buildingInfo', power: "SHOW" } },
];

//一定要将路由加载的模块导出到主模块
export const BuildingInfoList = [
  BuildingInfoComponent,
  AddBuildingInfoComponent
];

