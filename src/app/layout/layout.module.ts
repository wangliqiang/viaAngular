import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';

import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatRippleModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,

    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  declarations: [
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ]
})

export class LayoutModule { }