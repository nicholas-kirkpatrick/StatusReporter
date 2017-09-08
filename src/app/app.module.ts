import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { BudgetChartComponent } from './charts/budget-chart.component';
import { ScopeChartComponent } from './charts/scope-chart.component';
import { LineChartComponent } from './charts/line-chart.component';

import { TasksComponent } from './home/tasks.component';
import { ProjectsComponent } from './home/projects.component';

import { TaskService } from './_services/task.service';
import { ProjectService } from './_services/project.service';
import { AuthService } from './_services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ScopeChartComponent,
    BudgetChartComponent,
    LineChartComponent,
    TasksComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    NgbModule.forRoot(),
    ChartsModule,
  ],
  providers: [TaskService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
