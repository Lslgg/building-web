import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './component/header/header.component';
import { NavBarComponent } from './component/nav/navbar.component';
import { SlideBoxComponent } from './component/header/component/slideBox/slideBox.component';
import { ListItemComponent } from './component/nav/component/listitem/listitem.component';
import { SearchBarComponent } from './component/nav/component/searchBar/searchBar.component';
import { ChangeBoxComponent } from './component/header/component/changeBox/changeBox.component';
import { FooterComponent } from './component/footer/footer.component';
import { BoardComponent } from './component/footer/board/board.component';
import { NavbarComponent } from './component/footer/navbar/navbar.component';
import { BriefComponent } from './component/footer/brief/brief.component';
import { NewsComponent } from './component/footer/news/news.component';
import { ContactComponent } from './component/footer/contact/contact.component';
import { QrcodeComponent } from './component/footer/qrcode/qrcode.component';
import { CopyrightComponent } from './component/footer/copyright/copyright.component';
import { SlideComponent } from './component/slide/slide.component';
import { ServiceComponent } from './component/service/service.component';
import { TeamComponent } from './component/team/team.component';
import { ExampleComponent } from './component/example/example.component';
import { SlideLinkComponent } from './component/slideLink/slideLink.component';
import { EliteComponent } from './component/elite/elite.component';
import { ServiceSectionComponent } from './component/service-section/serviceSection.component';
import { EliteBoxComponent } from './component/elite/eliteBox/eliteBox.component';
import { ContactSectionComponent } from './component/contactSection/contactSection.conponent';
import { NewsSectionComponent } from './component/newsSection/newsSection.component';
import { BrandComponent } from './component/brand/brand.comonent';
import { IndexRoutes, IndexRoutedComponents } from './index/index.routing';
import { SearchNewsComponent } from './component/searchNews/searchNews.component';
import { HotComponent } from './component/hot/hot.component';
import { ArticleRoutes, ArticleRoutedComponents } from './article/about.routing';
import { GalleryRoutedComponents, GalleryRoutes } from './gallery/gallery.routing';
import { HotItemComponent } from './component/hot/hotItem/hotItem.component';
import { GalleryBoxComponent } from './gallery/galleryBox/galleryBox.component';
import { PicRowComponent } from './component/picRow/picrow.component';
import { PageBoxComponent } from './component/pageBox/pageBox.component';
import { NewsRoutes, NewsRoutedComponents } from './news/news.routing';
import { ContactRoutes, ContactRoutedComponents } from './contact/contact.routing';
import { ListPhoneComponent } from './component/nav/component/listPhone/listPhone.component';

var routesList: Routes = [
    ...IndexRoutes,
    ...ArticleRoutes,
    ...GalleryRoutes,
    ...NewsRoutes,
    ...ContactRoutes
];

const routes: Routes = [
    {
        path: '',
        component: HomeComponent, data: { title: 'bulding' },
        children: routesList
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }

export const routedComponents = [
    HomeComponent,
    SlideBoxComponent,
    ChangeBoxComponent,
    HeaderComponent,
    NavBarComponent,
    ListItemComponent,
    SearchBarComponent,
    FooterComponent,
    BoardComponent,
    NavbarComponent,
    BriefComponent,
    NewsComponent,
    ContactComponent,
    QrcodeComponent,
    CopyrightComponent,
    SlideComponent,
    ServiceComponent,
    TeamComponent,
    ExampleComponent,
    SlideLinkComponent,
    EliteComponent,
    ServiceSectionComponent,
    EliteBoxComponent,
    ContactSectionComponent,
    NewsSectionComponent,
    BrandComponent,
    IndexRoutedComponents,
    ArticleRoutedComponents,
    SearchNewsComponent,
    HotComponent,
    HotItemComponent,
    GalleryRoutedComponents,
    GalleryBoxComponent,
    PicRowComponent,
    PageBoxComponent,
    NewsRoutedComponents,
    ContactRoutedComponents,
    ListPhoneComponent
];