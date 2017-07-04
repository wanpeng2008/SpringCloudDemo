import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPicturesComponent } from './my-pictures.component';
import {myPictureRuting} from "./my-pictures.routing";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ShareModule} from "../../share/share.module";

@NgModule({
  imports: [
    CommonModule,
    myPictureRuting,
    NgbModule,
    Ng2SmartTableModule,
    ShareModule,
  ],
  declarations: [MyPicturesComponent]
})
export class MyPicturesModule { }
