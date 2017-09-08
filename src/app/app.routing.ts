import { Routes, RouterModule, CanActivate } from '@angular/router';

//Add the Auth guard service
import { AuthGuardService } from './login/auth-guard.service';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './home/tasks.component';
import { ProjectsComponent } from './home/projects.component';
import { CallbackComponent } from './login/callback.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'callback', component: CallbackComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);