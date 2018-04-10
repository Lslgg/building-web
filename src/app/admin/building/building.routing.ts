import { Routes } from '@angular/router';
import { BuildingMenuRoutes, BuildingMenuList } from './buildingMenu/buildingMenu.routing';

export var BuildingRoutes: Routes = [
    ...BuildingMenuRoutes
];

//一定要将路由加载的模块导出到admin.module模块
export const BuildingList = [
    BuildingMenuList
]
