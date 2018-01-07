import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {DesignDetailComponent} from "./design-detail/design-detail.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  { path:'', component: MainComponent},
  { path:'designDetail', component: DesignDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
