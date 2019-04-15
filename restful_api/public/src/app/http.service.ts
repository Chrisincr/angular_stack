import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getTask();
   }

  getTasks(){
  let tempObservable = this._http.get('/tasks');
  tempObservable.subscribe(data => console.log("got our tasks!", data));
  }

  getTask(){
    let tempObservable = this._http.get('/5cb0b21f707583043ca2b06d');
    tempObservable.subscribe(data => console.log("got task!",data));
  }
}


