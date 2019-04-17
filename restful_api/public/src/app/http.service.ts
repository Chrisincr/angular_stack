import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  

  constructor(private _http: HttpClient) {
    this.getTasks();
    
   }
   createTask(newTask: any) {
    return this._http.post('/',newTask);
  }

  updateTask(updateTask: any) {
    return this._http.put("/"+updateTask._id,updateTask)
  }

  getTasks(){
  return this._http.get('/tasks');
  }

  getTask(){
    let tempObservable = this._http.get('/5cb0b21f707583043ca2b06d');
    tempObservable.subscribe(data => console.log("got task!",data));
  }
}


