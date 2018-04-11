import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { BuildingArticleComponent } from './buildingArticle.component';
import { AddBuildingArticleComponent } from './component/addBuildingArticle.component';

export const BuildingArticleRoutes: Routes = [
  { path: 'buildingArticle', component: BuildingArticleComponent, data: { title: '菜单列表', module: 'buildingArticle', power: "SHOW" } },
  { path: 'addBuildingArticle', component: AddBuildingArticleComponent, data: { title: '菜单列表', module: 'buildingArticle', power: "SHOW" } },
  { path: 'addBuildingArticle/:id', component: AddBuildingArticleComponent, data: { title: '菜单列表', module: 'buildingArticle', power: "SHOW" } },
];

//一定要将路由加载的模块导出到主模块
export const BuildingArticleList = [
  BuildingArticleComponent,
  AddBuildingArticleComponent
];

