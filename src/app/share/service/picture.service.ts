import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {Http} from "@angular/http";

@Injectable()
export class PictureService {

  constructor(private http: Http) { }
  list(){
    return new Observable((observer: Observer<any>) => {
      this.http.get('api/list').map(res=>res.json()).subscribe(res =>{
        observer.next(res)
        observer.complete()
      }, error => {
        observer.error(error)
      })
    })
  }

}
