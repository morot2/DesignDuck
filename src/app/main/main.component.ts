import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event){
    if(document.documentElement.scrollTop >= 340){
      document.getElementsByTagName("mat-tab-header")[0].classList.add("sticky");
      //document.getElementById("tab-group").style.position = "fixed";
    } else {
      document.getElementsByTagName("mat-tab-header")[0].classList.remove("sticky");
    }
  }
}
