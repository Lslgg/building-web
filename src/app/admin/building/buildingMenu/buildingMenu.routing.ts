import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { BuildingMenuComponent } from './buildingMenu.component';
import { AddBuildingMenuComponent } from './component/addBuildingMenu.component';

export const BuildingMenuRoutes: Routes = [
  { path: 'buildingMenu', component: BuildingMenuComponent, data: { title: '菜单列表', module: 'buildingMenu', power: "SHOW" } },
  { path: 'addBuildingMenu', component: AddBuildingMenuComponent, data: { title: '菜单列表', module: 'buildingMenu', power: "SHOW" } },
  { path: 'addBuildingMenu/:id', component: AddBuildingMenuComponent, data: { title: '菜单列表', module: 'buildingMenu', power: "SHOW" } },
];

//一定要将路由加载的模块导出到主模块
export const BuildingMenuList = [
  BuildingMenuComponent,
  AddBuildingMenuComponent
];

