import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpperNavComponent } from './upper-nav/upper-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import { SearchComponent } from './search/search.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { DesignComponent } from './design/design.component';
import { MatCardModule } from '@angular/material/card';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { BannerComponent } from './banner/banner.component';
import { FacebookModule } from 'ngx-facebook';


@NgModule({
  declarations: [
    AppComponent,
    UpperNavComponent,
    SignInDialogComponent,
    SearchComponent,
    DesignComponent,
    BannerComponent,
  ],
  entryComponents : [
    SignInDialogComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    InfiniteScrollModule,
    FacebookModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
