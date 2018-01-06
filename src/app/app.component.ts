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

  @HostListener('window:scroll', ['$event'])
  onScroll(event){
    if(document.documentElement.scrollTop >= 340){
      console.log("sticky")
      document.getElementsByTagName("mat-tab-header")[0].classList.add("sticky");
      //document.getElementById("tab-group").style.position = "fixed";
    } else {
      document.getElementsByTagName("mat-tab-header")[0].classList.remove("sticky");
    }
    console.log( document.documentElement.scrollTop );
    console.log("tab : " + document.getElementById("tab-group").offsetTop);
  }

}
