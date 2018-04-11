import { Routes } from '@angular/router';
import { BuildingMenuRoutes, BuildingMenuList } from './buildingMenu/buildingMenu.routing';
import { BuildingImagesRoutes, BuildingImagesList } from './buildingImages/buildingImages.routing';
import { BuildingInfoRoutes, BuildingInfoList } from './buildingInfo/buildingInfo.routing';
import { BuildingArticleRoutes, BuildingArticleList } from './buildingArticle/buildingArticle.routing';

export var BuildingRoutes: Routes = [
    ...BuildingMenuRoutes,
    ...BuildingImagesRoutes,
    ...BuildingInfoRoutes,
    ...BuildingArticleRoutes
];

//一定要将路由加载的模块导出到admin.module模块
export const BuildingList = [
    BuildingMenuList,
    BuildingImagesList,
    BuildingInfoList,
    BuildingArticleList
]
