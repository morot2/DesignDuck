import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.css']
})
export class SignInDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SignInDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeDialog() {
    if(this.valid()) this.dialogRef.close(this.data.id);
    else{
      alert("아이디와 비밀번호를 모두 입력해주세요")
    }
  }

  valid() : boolean{
    let id = this.data.id;
    let pw = this.data.pw;

    if(id && pw) return true;

    return false;
  }

  submitThis(e){
    if(e.keyCode==13){
      this.closeDialog();
    }
  }

  ngOnInit() {
  }

}
