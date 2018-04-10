import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/server/auth-guard.service';

import { AdminComponent } from './admin.component';
import { HeaderComponent, SideNavComponent } from './layouts';
import { MainRoutes, MainComponentList } from './main/main.routing';
import { NotFindPageRoutes, NotFindPageComponentList } from '../component/404/notFindPage.routing';
import { systemRoutes, SystemList } from './system/system.routing';
import { BuildingRoutes, BuildingList } from './building/building.routing';


var routes: Routes = [
  ...MainRoutes, //首页
  ...systemRoutes, //系统管理
  ...BuildingRoutes, //建筑
  ...NotFindPageRoutes //错误页面请放最后
];


export var routeList: Routes = [
  {
    path: '', canActivateChild: [AuthGuard],
    component: AdminComponent, data: { title: '后台管理' },
    children: routes
  }
];


@NgModule({
  imports: [RouterModule.forChild(routeList)],
  exports: [RouterModule]
})


export class AdminRoutingModule { }

//一定要将路由加载的模块导出到admin.module模块
export const ComponentList = [
  HeaderComponent,
  SideNavComponent,
  AdminComponent,
  MainComponentList,
  SystemList,
  BuildingList,
  NotFindPageComponentList,
]
