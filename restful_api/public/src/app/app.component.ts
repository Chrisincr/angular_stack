import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  tasks = [];
  taskDetails = {}
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    //this.getTasksFromService()
  }
  getTasksFromService() {
    
    let observable = this._httpService.getTasks()
    observable.subscribe(data =>{
      console.log("Got our data!", data['data'])
      this.tasks = data['data']
    })
  }
  setTask(num){
    this.taskDetails = this.tasks[num];
    console.log("task: ", this.taskDetails)
  }
}
