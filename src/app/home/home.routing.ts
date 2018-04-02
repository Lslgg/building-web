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

var routesList: Routes = [
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
    ExampleComponent
];