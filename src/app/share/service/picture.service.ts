import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {Http} from "@angular/http";

@Injectable()
export class PictureService {

  private api: Observable<any>
  constructor(private http: Http) {
    //this.api = this.http.get('api/list')
    this.api = this.http.get('assets/data/picture.json')
  }
  list(){
    return new Observable((observer: Observer<any>) => {
      this.api.map(res=>res.json()).subscribe(res =>{
        observer.next(res)
        observer.complete()
      }, error => {
        observer.error(error)
      })
    })
  }

}
