import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { create } from 'domain';
import { ITask } from '../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  toggleModal: boolean = false;
  createTask: boolean = false;
  taskForm!: FormGroup;

  task!: ITask;

  tasksList!: ITask[];
  idCurrentClickedTask!: number | undefined;

  toggleAlert!: boolean;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.initForm();
  }

  initForm(): void {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],

    },
      {
        updateOn: 'blur'
      });
  }

  onSubmit(createTask: boolean): void {


  }

  showModalCreateTask() {
    this.taskForm.reset();
    this.toggleModal == false
      ? this.toggleModal = true
      : this.toggleModal = false;

    this.createTask = true;
  }

  showModalUpdateTask(task: ITask) {
    console.log(this.taskForm)
    this.toggleModal == false
      ? this.toggleModal = true
      : this.toggleModal = false;
    this.createTask = false;
    this.taskForm.patchValue(
      {
        name: task.name,
        description: task.description,

        // photo: concession.photo
      }
    )
    this.task = task;
  }


}
