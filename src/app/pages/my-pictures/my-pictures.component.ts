import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pictures',
  templateUrl: './my-pictures.component.html',
  styleUrls: ['./my-pictures.component.css']
})
export class MyPicturesComponent implements OnInit {

  settings;
  constructor() { }

  ngOnInit() {
    console.debug('MyPicturesComponent init')
    this.settings = {
      columns: {
        id: {
          title: 'ID'
        },
        name: {
          title: 'Full Name'
        },
        username: {
          title: 'User Name'
        },
        email: {
          title: 'Email'
        }
      }
    }
  }

}
