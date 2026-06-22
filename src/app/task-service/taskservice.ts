import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Taskservice {
  private tasksignal =signal<task[]>([
    {
    id: 1,
    title: "Finish Angular Project",
    description: "Complete the task manager project with routing and services",
    completed: false,
    createdAt: new Date("2026-04-01")
  },
  {
    id: 2,
    title: "Study Operating Systems",
    description: "Review process scheduling and memory management",
    completed: true,
    createdAt: new Date("2026-03-30")
  },
  {
    id: 3,
    title: "Practice Algorithms",
    description: "Solve 5 problems on arrays and recursion",
    completed: false,
    createdAt: new Date("2026-04-02")
  },
  {
    id: 4,
    title: "Prepare Presentation",
    description: "Prepare slides for software engineering project",
    completed: false,
    createdAt: new Date("2026-04-03")
  },
  {
    id: 5,
    title: "Fix Bugs",
    description: "Resolve UI bugs in the task manager app",
    completed: true,
    createdAt: new Date("2026-04-04")
  }
  ])

  tasks=this.tasksignal.asReadonly()

  comleatedtasks=computed(()=>{
    return this.tasksignal().filter(tasks=>tasks.completed)
  })

  activetask=computed(()=>{
    return this.tasksignal().filter(tasks=>!tasks.completed)
  })

  getTask(id:number){
    return this.tasks().find(task=>task.id===id)
  }
  deletetask(id:number){
    this.tasksignal.update((tasks)=>{
      return tasks.filter((task)=>task.id!==id)
    })
  }

  addtask(title: string, description: string) {
  const newtask: task = {
    id: this.tasks().length + 1,
    title,
    description,
    completed: false,
    createdAt: new Date()
  };

  this.tasksignal.update((tasks) => [...tasks, newtask]);
}

}

export interface task{
  id:number;
  title:string;
  description:string;
  completed:boolean;
  createdAt:Date;
}
