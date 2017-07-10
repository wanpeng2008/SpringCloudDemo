import {Component, Input, OnInit} from '@angular/core';
import {PictureService} from "../../service/picture.service";
import {OrderByPipe} from "../../pipe/order-by.pipe";

@Component({
  selector: 'app-pic-detail',
  templateUrl: './pic-detail.component.html',
  styleUrls: ['./pic-detail.component.css'],
})
export class PicDetailComponent implements OnInit {

  @Input() fileId
  picDetail
  constructor(private pictureService:PictureService) { }

  ngOnInit() {
    console.debug('PicDetailComponent init')
    this.pictureService.detail(this.fileId).subscribe(
      data => this.picDetail = data
    )
  }

}
