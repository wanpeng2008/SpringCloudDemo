import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-file-name-cell',
  templateUrl: './file-name-cell.component.html',
  styleUrls: ['./file-name-cell.component.css']
})
export class FileNameCellComponent implements OnInit {

  @Input() fileName:string
  @Output() fileNameClicked: EventEmitter<any> = new EventEmitter()
  renderValue
  constructor() { }

  ngOnInit() {
    console.debug('FileNameCellComponent init')
    this.renderValue = this.fileName
  }
  onClick(){
    this.fileNameClicked.emit()
  }

}
