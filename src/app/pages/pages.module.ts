import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import {pagesRuting} from "./pages.routing";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ShareModule} from "../share/share.module";

@NgModule({
  imports: [
    CommonModule,
    pagesRuting,
    NgbModule,
    ShareModule,
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
