import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { CentersComponent } from './components/centers/centers.component';
import { GradesComponent } from './components/grades/grades.component';
import { CertifsComponent } from './components/certifs/certifs.component';



@NgModule({
  declarations: [
    EducationComponent,
    CentersComponent,
    GradesComponent,
    CertifsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EducationComponent
  ]
})
export class EducationModule { }
