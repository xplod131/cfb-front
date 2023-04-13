import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ITask } from '../models/task.model';
import { TodoService } from '../../../generated-sources/openapi/api/todo.service';
import { Observable, map, tap } from 'rxjs';
import { TodoJsonld } from '../../../generated-sources/openapi/model/todoJsonld';
import { ApiTodosGetCollection200Response } from '../../../generated-sources/openapi';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  toggleModal: boolean = false;
  createTask: boolean = false;
  taskForm!: UntypedFormGroup;

  task!: TodoJsonld;

  tasksList!: any;
  idCurrentClickedTask!: number;

  toggleAlert!: boolean;

  constructor(
    private fb: UntypedFormBuilder,
    private todoService: TodoService,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadTasks();
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
    const todo = {
      name: this.taskForm.value.name,
      description: this.taskForm.value.description
    }
    if (createTask) {

      this.todoService.apiTodosPost({
        todoJsonld: todo

      }).subscribe();
      window.location.reload();
    } else {
      if (this.task.id)
        this.idCurrentClickedTask = this.task.id
      this.todoService.apiTodosIdPut({
        id: this.idCurrentClickedTask.toString(),
        todoJsonld: todo
      }).subscribe()
      window.location.reload();
    }
    this.toggleModal = false
  }
  showModalCreateTask() {
    this.taskForm.reset();
    this.toggleModal == false
      ? this.toggleModal = true
      : this.toggleModal = false;

    this.createTask = true;
  }
  showModalUpdateTask(task: TodoJsonld) {
    this.toggleModal == false
      ? this.toggleModal = true
      : this.toggleModal = false;
    this.createTask = false;
    this.taskForm.patchValue(
      {
        name: task.name,
        description: task.description,
      }
    )
    this.task = task;
  }
  responseAlert(event: any) {
    if (event) {
      this.todoService.apiTodosIdDelete({ id: this.idCurrentClickedTask.toString() }).subscribe()
      window.location.reload();
    }
    this.toggleAlert = false;
  }
  async loadTasks() {
    this.tasksList = await this.todoService.apiTodosGetCollection({}).toPromise();
  }
}
