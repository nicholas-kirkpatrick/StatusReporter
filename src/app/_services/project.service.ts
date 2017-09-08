import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Project } from '../_models/project';

@Injectable()
export class ProjectService {
    private headers = new Headers({ 'Content-Type': 'application/json' });

    private projectsUrl = 'http://localhost:3001/api/projects'; //url to web api

    constructor(private http: HttpClient) { }

    getProjects(): Promise<Project[]> {
        return this.http.get(this.projectsUrl)
            .toPromise()
            .then(response => response as Project[])
            .catch(this.handleError);
    }

    getProject(id: number): Promise<Project> {
        const url = `${this.projectsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response as Project)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}