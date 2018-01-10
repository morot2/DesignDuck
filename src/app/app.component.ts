import {Component, HostListener} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = '다~ 디자인덕이지!';

  constructor(){
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event){
    if(document.documentElement.scrollTop >= 340){
      document.getElementsByTagName("mat-tab-header")[0].classList.add("sticky");
      //document.getElementById("tab-group").style.position = "fixed";
    } else {
      document.getElementsByTagName("mat-tab-header")[0].classList.remove("sticky");
    }
    //console.log( document.documentElement.scrollTop );
    //console.log("tab : " + document.getElementById("tab-group").offsetTop);
  }

}
