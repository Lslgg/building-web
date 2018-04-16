import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { BuildingContactComponent } from './buildingContact.component';
// import { AddBuildingContactComponent } from './component/addBuildingContact.component';

export const BuildingContactRoutes: Routes = [
  { path: 'buildingContact', component: BuildingContactComponent, data: { title: '菜单列表', module: 'buildingInfo', power: "SHOW" } },
  // { path: 'addBuildingContact', component: AddBuildingContactComponent, data: { title: '菜单列表', module: 'buildingContact', power: "SHOW" } },
  // { path: 'addBuildingContact/:id', component: AddBuildingContactComponent, data: { title: '菜单列表', module: 'buildingContact', power: "SHOW" } },
];

//一定要将路由加载的模块导出到主模块
export const BuildingContactList = [
  BuildingContactComponent,
  // AddBuildingContactComponent
];

