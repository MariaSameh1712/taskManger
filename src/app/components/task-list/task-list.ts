import { Component, computed, inject, signal } from '@angular/core';
import { Taskservice } from '../../task-service/taskservice';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-task-list',
  imports: [RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  taskservice=inject(Taskservice);
  filter=signal <'all'|'completed'|'active'>('all')
  filtertask=computed(()=>{
    switch(this.filter()){
      case "all":
        return this.taskservice.tasks()
         case "completed":
        return this.taskservice.comleatedtasks()
         case "active":
        return this.taskservice.activetask()
    }
  })

  constructor(){
    console.log(this.taskservice.comleatedtasks())
     console.log(this.taskservice.activetask())
  }

setfilter(filter:'all'|'completed'|'active'){
  this.filter.set(filter)
}
}
