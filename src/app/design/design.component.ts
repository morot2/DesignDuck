import { Component, OnInit } from '@angular/core';
import { DESIGNS } from "../designs";

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  designs = DESIGNS;

  constructor() { }

  ngOnInit() {
  }

}
