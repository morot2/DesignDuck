import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-design-detail',
  templateUrl: './design-detail.component.html',
  styleUrls: ['./design-detail.component.css']
})
export class DesignDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    let contentTop = document.getElementById('content').style.top;
    let contentRight = document.getElementById('content').style.right;

    console.log('hello');
    console.log(contentTop +' ,' + contentRight);
  }

}
