import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  tasks = [];
  selectedTask: any;
  newTask: any;
  updateTask: any;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.newTask = {title: "", description: "", completed: false}
    this.updateTask = {_id: "",title: "", description: "", completed: false}
    
  }
  getTasksFromService() {
    
    let observable = this._httpService.getTasks()
    observable.subscribe(data =>{
      console.log("Got our data!", data['data'])
      this.tasks = data['data']
    })
  }
  setTask(task){
    this.selectedTask = task;
    console.log("task: ", this.selectedTask)
  }

  onSubmit(){
    console.log('submited',this.newTask)
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data =>{
      console.log("Got submited task back", data['data'])
    })
    

    this.newTask = {title: "", description: "", completed: false}
  }

  onSetUpdate(index){
    this.updateTask = this.tasks[index]
    console.log("updatetask: ", this.updateTask)
  }

  onUpdate(){
    let observable = this._httpService.updateTask(this.updateTask);
    observable.subscribe(data =>{
      console.log("Got Updated task back", data)
    })
  }
}
