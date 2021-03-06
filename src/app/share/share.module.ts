import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './component/top-nav/top-nav.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import {UserService} from "./service/user.service";
import {PictureService} from "./service/picture.service";
import { DatetimeRenderComponent } from './component/cell-data/datetime-render/datetime-render.component';
import { PicDetailRenderComponent } from './component/cell-data/pic-detail-render/pic-detail-render.component';
import { PicDetailComponent } from './component/pic-detail/pic-detail.component';
import { FileNameCellComponent } from './component/file-name-cell/file-name-cell.component';
import { OrderByPipe } from './pipe/order-by.pipe';

const COMPONENTS = [
  TopNavComponent, SideMenuComponent, DatetimeRenderComponent, PicDetailRenderComponent, PicDetailComponent, FileNameCellComponent, FileNameCellComponent,OrderByPipe
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...COMPONENTS],
  entryComponents: [
    DatetimeRenderComponent,
    PicDetailRenderComponent,
    PicDetailComponent
  ],
  providers: [
    UserService,
    PictureService,
  ],
  exports: [
    PicDetailComponent,
    FileNameCellComponent,
    OrderByPipe
  ]
})
export class ShareModule { }
