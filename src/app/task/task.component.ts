import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ITask } from '../models/task.model';
import { TodoService } from '../../../generated-sources/openapi/api/todo.service';
import { Observable, map, tap } from 'rxjs';
import { TodoJsonld } from '../../../generated-sources/openapi/model/todoJsonld';

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

  tasksList$!: Observable<TodoJsonld[]>;
  idCurrentClickedTask!: string;

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
    // make create task request

  }

  showModalCreateTask() {
    this.taskForm.reset();
    this.toggleModal == false
      ? this.toggleModal = true
      : this.toggleModal = false;

    this.createTask = true;
  }

  showModalUpdateTask(task: TodoJsonld) {
    console.log(this.taskForm)
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
      // make delete task request 

      this.todoService.apiTodosIdDelete({ id: this.idCurrentClickedTask })
    }
    this.toggleAlert = false;
  }

  async loadTasks() {
    this.tasksList$ = this.todoService.apiTodosGetCollection({}).pipe(
      map(response => response.hydramember),
    )

  }





}
