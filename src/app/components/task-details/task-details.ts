import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Taskservice } from '../../task-service/taskservice';

@Component({
  selector: 'app-task-details',
  imports: [RouterLink],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css',
})
export class TaskDetails {
route=inject(ActivatedRoute)
taskid=signal<number|null>(null)
taskservice=inject(Taskservice)

task=computed(()=>{
  const id=this.taskid();

  if(!id)return undefined;

  return  this.taskservice.getTask(id);
})



constructor(){
  const id =this.route.snapshot.paramMap.get('id');
  if (id){
    this.taskid.set(Number(id))
  }
}
}
