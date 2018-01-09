import { Component, OnInit } from '@angular/core';
import { DESIGNS } from "../designs";
import { Design} from "../design";
import { MatchMediaService} from "../matchMedia.service";
import {MatDialog} from "@angular/material";
import {DesignDetailComponent} from "../design-detail/design-detail.component";

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css'],
  providers: [ MatchMediaService ],

})
export class DesignComponent implements OnInit {

  designs : Design[] = new Array();
  fullDesigns = DESIGNS;

  IsMobile: Boolean = false;
  IsDesktop: Boolean = false;

  idx : number = 0;

  constructor( public dialog : MatDialog, private matchMediaService: MatchMediaService ) {

    this.addItems(this.idx);
    this.IsMobile = (this.matchMediaService.IsPhone() || this.matchMediaService.IsTablet());
    this.IsDesktop = (this.matchMediaService.IsDesktop());
  }

  addItems(idx){
    if(idx+10 <= this.fullDesigns.length){
      for(let i=idx; i<idx+10; i++){
        this.designs.push(this.fullDesigns.pop());
      }
    }
    this.idx = idx + 10;
  }

  openDesignDetailDialog(): void {
    let dialogRef = this.dialog.open(DesignDetailComponent, {
      height: '90%',
      width: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  putOnBasket(){
    alert("관심 : 준비중 입니다");
  }

  buyDesign(){
    alert("구매 : 준비중 입니다");
  }

  onScroll(){
    this.addItems(this.idx);
    console.log('scrolled!');
  }

  ngOnInit() {
  }

}
