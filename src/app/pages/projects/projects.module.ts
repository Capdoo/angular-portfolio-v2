import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { ContributionsComponent } from './components/contributions/contributions.component';
import { PrimengModule } from '../../shared/primeng.module';



@NgModule({
  declarations: [
    ProjectsComponent,
    RepositoriesComponent,
    ContributionsComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class ProjectsModule { }
