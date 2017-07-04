import { Component, OnInit } from '@angular/core';
import {PictureService} from "../../../../share/service/picture.service";

@Component({
  selector: 'app-public-pictures',
  templateUrl: './public-pictures.component.html',
  styleUrls: ['./public-pictures.component.css']
})
export class PublicPicturesComponent implements OnInit {

  constructor(private pictureServicei: PictureService) { }

  ngOnInit() {
  }

}
