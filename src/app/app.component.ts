import {Component, HostListener} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {MatchMediaService} from "./matchMedia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ MatchMediaService ],

  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = '다~ 디자인덕이지!';

  IsMobile: Boolean = false;
  IsDesktop: Boolean = false;

  constructor( private matchMediaService: MatchMediaService ) {
    this.IsMobile = (this.matchMediaService.IsPhone() || this.matchMediaService.IsTablet());
    this.IsDesktop = (this.matchMediaService.IsDesktop());
  }

}
