import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import {pagesRuting} from "./pages.routing";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    pagesRuting,
    NgbModule,
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
