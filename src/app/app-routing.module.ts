import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {DesignDetailComponent} from "./design-detail/design-detail.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
