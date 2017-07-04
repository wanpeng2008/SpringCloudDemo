import { Component, OnInit } from '@angular/core';
import {PictureService} from "../../../../share/service/picture.service";

@Component({
  selector: 'app-private-pictures',
  templateUrl: './private-pictures.component.html',
  styleUrls: ['./private-pictures.component.css']
})
export class PrivatePicturesComponent implements OnInit {

  constructor(private pictureServicei: PictureService) { }

  ngOnInit() {
  }

}
