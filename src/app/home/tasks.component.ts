import { Component, OnInit } from '@angular/core';

import { Task } from '../_models/task';
import { TaskService } from '../_services/task.service'

@Component({
    selector: 'tasks-component',
    templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {
    private tasks: Task[];

    constructor(private taskService: TaskService) { }

    getTasks(): void {
        this.taskService.getTasks().then(response => { this.tasks = response; })
    }

    ngOnInit(): void {
        this.getTasks();
    }

    getKeys(): string[] {
        //return the list of keys
        return (this.tasks && this.tasks.length > 0) ? Object.keys(this.tasks[0]) : [];
    }
}