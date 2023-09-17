import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  tasksForm: string[] = [];

  constructor(private fb: FormBuilder) { }

  taskFg = this.fb.group({
    taskFormCtrl: ['', [Validators.required, Validators.minLength(4)]]
  }); 

  addTask(): void {
    this.tasksForm?.push(this.TaskFormCtrl.value);
  }

  removeTask(i: number): void {
    this.tasksForm?.splice(i, 1);
  }

  get TaskFormCtrl(): FormControl {
    return this.taskFg.get('taskFormCtrl') as FormControl;
  }
}
