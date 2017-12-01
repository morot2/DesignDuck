import {Component, OnInit} from '@angular/core';
import {SignInDialogComponent} from "../sign-in-dialog/sign-in-dialog.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-upper-nav',
  templateUrl: './upper-nav.component.html',
  styleUrls: ['./upper-nav.component.css']
})
export class UpperNavComponent implements OnInit {

  name : string;
  id : number;

  constructor(public dialog : MatDialog) { }

  openSigninDialog(): void {
    let dialogRef = this.dialog.open(SignInDialogComponent, {
      height: '300px',
      width: '600px',
      data: { name: this.name, id: this.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }

  ngOnInit() {
  }

}
