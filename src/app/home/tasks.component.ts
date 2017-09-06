import { Component } from '@angular/core';

import { Task } from '../_models/task';

@Component({
    selector: 'tasks-component',
    templateUrl: './tasks.component.html'
})
export class TasksComponent {
    private tasksData: Array<any>;

    constructor() { }

    ngOnInit() { }
}