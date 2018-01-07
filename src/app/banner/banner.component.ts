import { Component, OnInit } from '@angular/core';
import {MatchMediaService} from '../matchMedia.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [ MatchMediaService ],
})
export class BannerComponent implements OnInit {
  IsMobile: Boolean = false;
  IsDesktop: Boolean = false;

  constructor( private matchMediaService: MatchMediaService ) {
    this.IsMobile = (this.matchMediaService.IsPhone() || this.matchMediaService.IsTablet());
    this.IsDesktop = (this.matchMediaService.IsDesktop());
  }

  ngOnInit() {
  }

}
