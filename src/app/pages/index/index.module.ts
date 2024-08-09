import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { WhoiamComponent } from './components/whoiam/whoiam.component';
import { WhatidoComponent } from './components/whatido/whatido.component';

@NgModule({
  declarations: [
    IndexComponent,
    WhoiamComponent,
    WhatidoComponent
  ],
  exports: [
    IndexComponent,
    // WhoiamComponent,
    WhatidoComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class IndexModule { }
