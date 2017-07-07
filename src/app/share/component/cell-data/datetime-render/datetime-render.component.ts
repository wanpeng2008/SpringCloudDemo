import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from "ng2-smart-table";

@Component({
  selector: 'app-datetime-render',
  templateUrl: './datetime-render.component.html',
  styleUrls: ['./datetime-render.component.css']
})
export class DatetimeRenderComponent implements OnInit, ViewCell {
  renderValue: string;
  @Input() value: string | number;
  @Input() rowData: any;

  constructor() { }

  ngOnInit() {
    this.renderValue = this.value.toString()
  }

}

/*
implements ViewCell, OnInit {

  renderValue: string;

@Input() value: string | number;
@Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

}*/
