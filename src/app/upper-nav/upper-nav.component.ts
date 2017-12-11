import {Component, OnInit} from '@angular/core';
import {SignInDialogComponent} from "../sign-in-dialog/sign-in-dialog.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-upper-nav',
  templateUrl: './upper-nav.component.html',
  styleUrls: ['./upper-nav.component.css']
})
export class UpperNavComponent implements OnInit {

  id : string;
  pw : string;

  constructor(public dialog : MatDialog) { }

  openSigninDialog(): void {
    let dialogRef = this.dialog.open(SignInDialogComponent, {
      height: '300px',
      width: '600px',
      data: { id: this.id, pw: this.pw }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.id = result;
    });
  }

  ngOnInit() {
  }

}
