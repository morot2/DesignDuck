import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AuthenticationService} from "../_services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.css']
})
export class SignInDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SignInDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private authenticationService: AuthenticationService) { }
  model: any = {};
  loading = false;
  error = '';


  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.userId, this.model.password)
      .subscribe(result => {
        if (result === true) {
          // login successful
          if(this.valid()) this.dialogRef.close(this.model.userId);
          else{
            alert("아이디와 비밀번호를 모두 입력해주세요")
          }
          this.router.navigate(['/']);
        } else {
          // login failed
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }
  closeDialog() {

  }

  valid() : boolean{
    let id = this.model.userId;
    let pw = this.model.password;

    if(id && pw) return true;

    return false;
  }

  submitThis(e){
    if(e.keyCode==13){
      this.closeDialog();
    }
  }


}
