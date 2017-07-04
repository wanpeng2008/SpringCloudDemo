import { Component, OnInit } from '@angular/core';
import {PictureService} from "../../../../share/service/picture.service";

@Component({
  selector: 'app-public-pictures',
  templateUrl: './public-pictures.component.html',
  styleUrls: ['./public-pictures.component.css']
})
export class PublicPicturesComponent implements OnInit {
  settings

  constructor(private pictureServicei: PictureService) { }

  ngOnInit() {
    console.debug('PublicPicturesComponent init')
    this.settings = {
      hideSubHeader: true,
      columns: {
        id: {
          title: '文件名'
        },
        name: {
          title: '上传人'
        },
        username: {
          title: '上传时间'
        },
        email: {
          title: '链接地址'
        },
      }
    }
  }

}

// 文件类型，文件大小，过期时间，文件预览
