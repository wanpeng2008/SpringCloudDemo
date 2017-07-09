import { Component, OnInit } from '@angular/core';
import {PictureService} from "../../../../share/service/picture.service";
import {LocalDataSource} from "ng2-smart-table";
import {DatetimeRenderComponent} from "../../../../share/component/cell-data/datetime-render/datetime-render.component";
import {PicDetailRenderComponent} from "../../../../share/component/cell-data/pic-detail-render/pic-detail-render.component";

@Component({
  selector: 'app-public-pictures2',
  templateUrl: './public-pictures.component.html',
  styleUrls: ['./public-pictures.component.css']
})
export class PublicPicturesComponent2 implements OnInit {
  settings
  source: LocalDataSource;
  constructor(private pictureService: PictureService) {
    this.source = new LocalDataSource();
  }

  ngOnInit() {
    console.debug('PublicPicturesComponent2 init')
    this.settings = {
      selectMode: 'multi',
      hideSubHeader: true,
      noDataMessage: '没有shuj',
      editable: false,
      attr: {
        id: 'public_pic',
        class: 'list-table'
      },
      rowClassFunction: this.rowClassFunction,
      actions: {
        columnTitle: '操作',
        add: false,
        edit: false,
        delete: true,
        position: 'right',
      },
      delete: {
        deleteButtonContent: '删除',
        confirmDelete: true,
      },
      page: {
        display: true,
        perPage: 10,
      },
      columns: {
        fileName: {
          title: '文件名',
          type: 'custom',
          renderComponent: PicDetailRenderComponent,
        },
        owner: {
          title: '上传人'
        },
        createDate: {
          title: '上传时间',
          type: 'custom',
          renderComponent: DatetimeRenderComponent,
        },
        contentType: {
          title: '图片类型'
        },
      }
    }
    this.loadData()
  }
  loadData(){
    this.pictureService.list().subscribe(
      data => {
        this.source.load(data)
      }
    )
  }
  rowClassFunction(){
    return "list-table-row"
  }
  userRowSelect($event){
    console.debug($event)
  }
  mouseover($event){
    console.debug($event)
  }

}

// 文件类型，文件大小，过期时间，文件预览
