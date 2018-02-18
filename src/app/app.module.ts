import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpperNavComponent } from './upper-nav/upper-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routing } from './app-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import { SearchComponent } from './search/search.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { DesignComponent } from './design/design.component';
import { MatCardModule } from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BannerComponent } from './banner/banner.component';
import { FacebookModule } from 'ngx-facebook';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from "@angular/material";
import { DesignDetailComponent } from './design-detail/design-detail.component';
import { MainComponent } from './main/main.component';
import {AuthGuard} from "./_guard/auth.guard";
import {AuthenticationService} from "./_services/authentication.service";
import {fakeBackendProvider} from "./_utils/fake-backend";
import {MockBackend} from "@angular/http/testing";
import {BaseRequestOptions} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import { MyspaceComponent } from './myspace/myspace.component';


@NgModule({
  declarations: [
    AppComponent,
    UpperNavComponent,
    SignInDialogComponent,
    SearchComponent,
    DesignComponent,
    BannerComponent,
    FooterComponent,
    DesignDetailComponent,
    MainComponent,
    MyspaceComponent,
  ],
  entryComponents : [
    SignInDialogComponent,
    DesignDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    InfiniteScrollModule,
    FacebookModule.forRoot(),
    routing,
  ],
  providers: [AuthGuard,
    AuthenticationService,

    // providers used to create fake backend
    fakeBackendProvider,
    HttpClientModule,
    MockBackend,
    BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
