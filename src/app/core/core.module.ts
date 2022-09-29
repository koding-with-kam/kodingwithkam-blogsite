import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers/app/app.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    FlexLayoutModule
  ]
})
export class CoreModule { }
