import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './component/top-nav/top-nav.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import {UserService} from "./service/user.service";
import {PictureService} from "./service/picture.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopNavComponent, SideMenuComponent],
  providers: [
    UserService,
    PictureService,
  ]
})
export class ShareModule { }
