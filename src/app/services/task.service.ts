import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Task } from '../_models/task';

@Injectable()
export class TaskService {
    private tasksUrl = 'api/tasks'; //url to web api

    constructor(private http: HttpClient) { }

    getTasks(): Promise<Task[]> {
        return this.http.get(this.tasksUrl)
            .toPromise()
            .then(response => response as Task[])
            .catch(this.handleError);
    }

    getTask(id: number): Promise<Task> {
        const url = `${this.tasksUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response as Task)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}