import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './components/work/work.component';
import { VoluntariadoComponent } from './components/voluntariado/voluntariado.component';
import { PrimengModule } from '../../shared/primeng.module';



@NgModule({
  declarations: [
    ExperienceComponent,
    WorkComponent,
    VoluntariadoComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    ExperienceComponent
  ]
})
export class ExperienceModule { }
