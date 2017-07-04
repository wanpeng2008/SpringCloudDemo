import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageServerComponent } from './storage-server.component';
import { PublicPicturesComponent } from './components/public-pictures/public-pictures.component';
import { PrivatePicturesComponent } from './components/private-pictures/private-pictures.component';
import { ExpiredPicturesComponent } from './components/expired-pictures/expired-pictures.component';
import {storageServerRuting} from "./storage-server.routing";
import {ShareModule} from "../../share/share.module";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    storageServerRuting,
    NgbModule,
    Ng2SmartTableModule,
    ShareModule,
  ],
  declarations: [StorageServerComponent, PublicPicturesComponent, PrivatePicturesComponent, ExpiredPicturesComponent]
})
export class StorageServerModule { }
