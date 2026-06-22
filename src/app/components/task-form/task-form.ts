import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { Taskservice } from '../../task-service/taskservice';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  private fb = inject(FormBuilder)
  private taskserve=inject(Taskservice)
  private router=inject(Router)


 taskform = this.fb.group({
  title: ['', [Validators.required, Validators.minLength(3)]],
  description: ['', [Validators.required]]
});

onsubmit() {
  if (this.taskform.valid) {

    const { title, description } = this.taskform.value;

    if (title && description) {
      this.taskserve.addtask(title, description);
    }

    this.taskform.reset();
    this.router.navigate(['/']);
  }
}


}
