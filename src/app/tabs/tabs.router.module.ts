import { TabsPage } from './tabs.page';
import { RouterModule, Route, Routes } from '@angular/router';
import { ngModuleJitUrl } from '@angular/compiler';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            { path: 'feed', loadChildren: '../feed/feed.module#FeedPageModule' },
            { path: 'uploader', loadChildren: '../uploader/uploader.module#UploaderPageModule' },
            { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsRoutingModule { }
