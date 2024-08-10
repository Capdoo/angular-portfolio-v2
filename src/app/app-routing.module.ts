import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index/index.component';
import { EducationComponent } from './pages/education/education/education.component';
import { PrimengModule } from './shared/primeng.module';
import { ExperienceComponent } from './pages/experience/experience/experience.component';

const routes: Routes = [
  //Home
  { path: '', component: IndexComponent},
  { path: 'home', component: IndexComponent},
  { path: 'educacion', component: EducationComponent},
  { path: 'experiencia', component: ExperienceComponent},
  // { path: 'proyectos', component: MainProyectosComponent},
  // { path: 'contacto', component: MainContactoComponent},


  { path: '**', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  