import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {Http} from "@angular/http";

@Injectable()
export class PictureService {

  private listApi(): Observable<any> { return this.http.get('api/list') }
  private detailApi(id): Observable<any> {return this.http.get('api/picInfo/'+id) }
  constructor(private http: Http) {
    //this.api = this.http.get('assets/data/picture.json')
  }
  list(){
    return new Observable((observer: Observer<any>) => {
      this.listApi().map(res=>res.json()).subscribe(res =>{
        observer.next(res)
        observer.complete()
      }, error => {
        observer.error(error)
      })
    })
  }
  detail(id){
    return new Observable((observer: Observer<any>) => {
      this.detailApi(id).map(res=>res.json()).subscribe(res =>{
        observer.next(res)
        observer.complete()
      }, error => {
        observer.error(error)
      })
    })
  }

}
