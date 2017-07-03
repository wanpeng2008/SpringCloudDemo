import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPicturesComponent } from './my-pictures.component';
import {myPictureRuting} from "./my-pictures.routing";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    myPictureRuting,
    NgbModule,
  ],
  declarations: [MyPicturesComponent]
})
export class MyPicturesModule { }
