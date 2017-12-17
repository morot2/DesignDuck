import {Component, OnInit} from '@angular/core';
import {SignInDialogComponent} from "../sign-in-dialog/sign-in-dialog.component";
import {MatDialog} from "@angular/material";
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';

@Component({
  selector: 'app-upper-nav',
  templateUrl: './upper-nav.component.html',
  styleUrls: ['./upper-nav.component.css']
})
export class UpperNavComponent implements OnInit {

  id : string;
  pw : string;
  fbLoginStatus : boolean = false;


  constructor(public dialog : MatDialog, private fb: FacebookService) {
    fb.init({
      appId: '541166612898495',
      version: 'v2.9'
    });
  }

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

  /**
   * Login with minimal permissions. This allows you to see their public profile only.
   */
  login() {
    this.fb.login()
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
      })
      .catch(this.handleError);
  }

  /**
   * Login with additional permissions/options
   */
  loginWithOptions() {

    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list'
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        console.log('Logged in', res);

        if(res.status == "conntected"){
          this.fbLoginStatus = true;
        }
      })
      .catch(this.handleError);
  }

  getLoginStatus() {
    this.fb.getLoginStatus()
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
  }


  /**
   * This is a convenience method for the sake of this example project.
   * Do not use this in production, it's better to handle errors separately.
   * @param error
   */
  private handleError(error) {
    console.error('Error processing action', error);
  }

  ngOnInit() {
  }

}
