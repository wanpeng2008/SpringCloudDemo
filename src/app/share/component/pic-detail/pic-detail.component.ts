import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pic-detail',
  templateUrl: './pic-detail.component.html',
  styleUrls: ['./pic-detail.component.css']
})
export class PicDetailComponent implements OnInit {

  @Input() fileId
  constructor() { }

  ngOnInit() {
    console.debug('PicDetailComponent init')
  }

}
