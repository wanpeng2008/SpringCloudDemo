import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StorageServerComponent} from "./storage-server.component";
import {PublicPicturesComponent} from "./components/public-pictures/public-pictures.component";
import {PrivatePicturesComponent} from "./components/private-pictures/private-pictures.component";
import {ExpiredPicturesComponent} from "./components/expired-pictures/expired-pictures.component";

const routes: Routes = [{
  path: '',
  component: StorageServerComponent,
  children: [
    {path: 'public', component: PublicPicturesComponent},
    {path: 'private', component: PrivatePicturesComponent},
    {path: 'expired', component: ExpiredPicturesComponent}
  ]
}];

export const storageServerRuting: ModuleWithProviders = RouterModule.forChild(routes);
