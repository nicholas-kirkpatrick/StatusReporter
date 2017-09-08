import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Project } from '../_models/project';
import { ProjectService } from '../_services/project.service'

@Component({
    selector: 'projects-component',
    templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
    private projects: Project[];

    constructor(private projectService: ProjectService,
        private route: ActivatedRoute,
        private router: Router) { }

    getProjects(): void {
        this.projectService.getProjects().then(response => { this.projects = response; })
    }

    ngOnInit(): void {
        this.getProjects();
    }

    getKeys(): string[] {
        //return the list of keys
        return (this.projects && this.projects.length > 0) ? Object.keys(this.projects[0]) : [];
    }

    selectProject(event, project: Project): void {
        //navigate to selected project    
        this.router.navigate(['/home']);
    }
}
