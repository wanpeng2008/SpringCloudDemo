import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyPicturesComponent} from "./my-pictures.component";

export const routes: Routes = [
  {
    path: '',
    component: MyPicturesComponent,
  }
];

export const myPictureRuting: ModuleWithProviders = RouterModule.forChild(routes);
