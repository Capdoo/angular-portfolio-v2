import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    PanelModule,
    TimelineModule
  ]
})
export class PrimengModule { }
