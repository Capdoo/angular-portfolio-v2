import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { CentersComponent } from './components/centers/centers.component';
import { GradesComponent } from './components/grades/grades.component';
import { CertifsComponent } from './components/certifs/certifs.component';
// import { PrimengModule } from '../../shared/primeng.module';

import { EducationComponent } from './education/education.component';
import { PrimengModule } from '../../shared/primeng.module';

@NgModule({
  declarations: [
    EducationComponent,
    CentersComponent,
    GradesComponent,
    CertifsComponent
  ],
  imports: [
    PrimengModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,

  ],
  exports: [
    EducationComponent,
  ]
})
export class EducationModule { }
