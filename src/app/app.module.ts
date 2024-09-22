import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { IndexModule } from './pages/index/index.module';

import { ButtonModule } from 'primeng/button';
import { PrimengModule } from './shared/primeng.module';
import { EducationModule } from './pages/education/education.module';
import { ExperienceModule } from './pages/experience/experience.module';
import { ProjectsModule } from './pages/projects/projects.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    IndexModule,
    EducationModule,
    ExperienceModule,
    ProjectsModule,
    ButtonModule,
    PrimengModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
