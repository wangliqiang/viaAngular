import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';

import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatRippleModule } from '@angular/material';
import { NavCollapseComponent } from './nav-collapse/nav-collapse.component';
import { NavItemComponent } from './nav-item/nav-item.component';

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
    LayoutComponent,
    NavCollapseComponent,
    NavItemComponent
  ],
  exports: [
    LayoutComponent
  ]
})

export class LayoutModule { }