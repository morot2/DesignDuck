import { Component, OnInit } from '@angular/core';
import { DESIGNS } from "../designs";
import { Design} from "../design";

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  designs : Design[] = new Array();
  fullDesigns = DESIGNS;

  idx : number = 0;

  constructor() {
    this.addItems(this.idx);
  }

  addItems(idx){
    for(let i=idx; i<idx+10; i++){
      this.designs.push(this.fullDesigns.pop());
    }
    this.idx = idx + 10;
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
