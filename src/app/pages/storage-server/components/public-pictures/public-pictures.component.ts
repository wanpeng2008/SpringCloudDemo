import { Component, OnInit } from '@angular/core';
import {PictureService} from "../../../../share/service/picture.service";
import {LocalDataSource} from "ng2-smart-table";
import {DatetimeRenderComponent} from "../../../../share/component/cell-data/datetime-render/datetime-render.component";
import {PicDetailRenderComponent} from "../../../../share/component/cell-data/pic-detail-render/pic-detail-render.component";

@Component({
  selector: 'app-public-pictures',
  templateUrl: './public-pictures.component.html',
  styleUrls: ['./public-pictures.component.css']
})
export class PublicPicturesComponent implements OnInit {
  picDetailList
  allChecked: boolean = false
  constructor(private pictureService: PictureService) {
    this.picDetailList = [];
  }

  ngOnInit() {
    console.debug('PublicPicturesComponent init')
    this.loadData()
  }
  loadData(){
    this.pictureService.list().subscribe(
      data => {
        this.picDetailList = data
      }
    )
  }

  allCheckedChange($event){
    this.picDetailList.map(item =>{
      item.checked = $event
    })
  }
  fileNameClicked($event,item){
    item.showDetail=!item.showDetail
  }

}

// 文件类型，文件大小，过期时间，文件预览
