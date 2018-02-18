import { Component, OnInit } from '@angular/core';
import { DESIGNS } from "../designs";
import { Design} from "../design";
import { MatchMediaService} from "../matchMedia.service";
import { MatDialog } from "@angular/material";
import { DesignDetailComponent } from "../design-detail/design-detail.component";
import {RetrieveAllDesignService} from "../_services/retrieve-all-design.service";

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css'],
  providers: [ MatchMediaService, RetrieveAllDesignService ],

})
export class DesignComponent implements OnInit {

  designs : Design[] = new Array();
  fullDesigns = DESIGNS;

  IsMobile: Boolean = false;
  IsDesktop: Boolean = false;

  idx : number = 1;

  constructor( public dialog : MatDialog,
               private matchMediaService: MatchMediaService,
               private retrieveAllDesignService : RetrieveAllDesignService
  ) {

    this.addItems(this.idx); //onload시 데이터 10개 세팅
    this.IsMobile = (this.matchMediaService.IsPhone() || this.matchMediaService.IsTablet());
    this.IsDesktop = (this.matchMediaService.IsDesktop());
  }

  //local 무한스크롤 테스트
  addItems(idx){
    if(idx+10 <= this.fullDesigns.length){
      for(let i=idx; i<idx+10; i++){
        this.designs.push(this.fullDesigns.pop());
      }
    }
    this.idx = idx + 10;
  }

  /*
  addItems(idx){
    if(idx+1 <= 4) this.getAllDesigns(idx);
    this.idx = idx + 1;
  }*/

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

  getAllDesigns(idx): void {
    this.retrieveAllDesignService.getDesigns(idx)
      .subscribe(designs => console.log(designs)/*this.designs.concat(designs)*/);
  }

}
