import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './component/top-nav/top-nav.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopNavComponent, SideMenuComponent]
})
export class ShareModule { }
