import { Component, OnInit } from '@angular/core';
import {PictureService} from "../../../../share/service/picture.service";

@Component({
  selector: 'app-expired-pictures',
  templateUrl: './expired-pictures.component.html',
  styleUrls: ['./expired-pictures.component.css']
})
export class ExpiredPicturesComponent implements OnInit {

  constructor(private pictureServicei: PictureService) { }

  ngOnInit() {
  }

}
