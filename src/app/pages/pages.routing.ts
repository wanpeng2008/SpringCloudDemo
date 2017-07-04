import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {PagesComponent} from "./pages.component";

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'myPictures', pathMatch: 'full' },
      { path: 'myPictures', loadChildren: 'app/pages/my-pictures/my-pictures.module#MyPicturesModule' },
      { path: 'storageServer', loadChildren: 'app/pages/storage-server/storage-server.module#StorageServerModule' },
    ]
  }
];

export const pagesRuting: ModuleWithProviders = RouterModule.forChild(routes);
